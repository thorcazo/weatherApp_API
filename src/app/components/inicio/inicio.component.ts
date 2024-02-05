import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsideComponent } from '../aside/aside.component';
import { OpenWeatherService } from '../../services/open-weather.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink, AsideComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  @Input() posts: any;

  fechaActual = new Date();

  dias = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];
  nombreDia = this.dias[this.fechaActual.getDay()];

  hora = this.fechaActual.getHours();
  minuto = this.fechaActual.getMinutes();

  ciudades: Array<any> = ['cartagena', 'cordoba', 'córdoba'];

  constructor(private service: OpenWeatherService) {}

  ngOnInit(): void {
    this.fetchPosts('Murcia'); // C con la ciudad de Murcia
  }

  fetchPosts(ciudad: string): void {
    this.service.getOpenWeather(ciudad).subscribe((res) => {
      console.log(res, this.nombreDia);
      this.posts = res;
    });
  }

  public mostrarDatos(ciudad: string) {
    if (this.ciudades.includes(ciudad.toLowerCase().trim())) {
      ciudad += ',es';
    }
    return this.fetchPosts(ciudad);
  }
}
