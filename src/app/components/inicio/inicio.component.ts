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
  @Input() posts: any

  fechaActual = new Date()

  dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
  nombreDia = this.dias[this.fechaActual.getDay()]

  hora = this.fechaActual.getHours()
  minuto = this.fechaActual.getMinutes()

  esFahrenheit: boolean = false

  ciudades: Array<any> = [
    'cartagena',
    'cordoba',
    'córdoba'
  ]

  constructor(private service: OpenWeatherService) { }

  ngOnInit(): void {
    this.fetchPosts('Murcia'); // C con la ciudad de Murcia
  }

  fetchPosts(ciudad: string): void {
    this.service.get6DaysForecast(ciudad).subscribe((res) => {
      console.log(res);
      this.posts = res;
    });
  }

  public mostrarDatos(ciudad: string) {
    if (this.ciudades.includes(ciudad.toLowerCase().trim())) {
      ciudad += ',es';
    }
    return this.fetchPosts(ciudad);
  }

  get5DaysForecast(ciudad: string) {
    this.service.get6DaysForecast(ciudad)
  }

  gradosAFahrenheit() {
    this.posts.main.temp = Math.round(this.posts.list[0].temp.day * 1.8 + 32);
    return this.posts.main.temp;
  }


  cambiarTemperatura() {
    if (!this.esFahrenheit) {
      // Si está en Celsius, convierte a Fahrenheit
      this.posts.list[0].temp.day = +(this.posts.list[0].temp.day * 9 / 5 + 32).toFixed(2);
      this.esFahrenheit = true; // Actualiza el indposts.list[0].temp.dayicador
    } else {
      // Si ya está en Fahrenheit, convierte de nuevo a Celsius (opcional, si deseas permitir volver a Celsius)
      this.posts.list[0].temp.day = +((this.posts.list[0].temp.day - 32) * 5 / 9).toFixed(2);
      this.esFahrenheit = false; // Vuelve a Celsius
    }
  }

  getDiaSiguiente(n:number) :number {
    let dia = this.fechaActual.getDay() + n;
    if (dia > 6) {
      dia = dia - 7;
    }
    return dia
  }


  imagenDesierto =
    'https://images.unsplash.com/photo-1683009680116-b5c04463551d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  imagenPrueba =
    'https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  imgAbstracta =
    'https://plus.unsplash.com/premium_photo-1672329275106-073b5493c00f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
}
