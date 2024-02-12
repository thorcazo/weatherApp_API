import { Component, Input, NgModule, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsideComponent } from '../aside/aside.component';
import { OpenWeatherService } from '../../services/open-weather.service';
import { UsuariosService } from '../../services/usuarios.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink, AsideComponent, CommonModule, HttpClientModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  posts: any = [];
  allData: any = [];
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

  today = new Date().getDate();

  hora = this.fechaActual.getHours();
  minuto = this.fechaActual.getMinutes();

  esFahrenheit: boolean = false;

  ciudades: Array<any> = [
    'cartagena',
    'cordoba',
    'córdoba',
    'merida',
    'mérida'
  ]

  private usuariosDB = inject(UsuariosService);

  getUsuarios() {
    return this.usuariosDB.getUsuarios();
  }

  getusuariosPorCiudad(ciudad: string) {
    if (!ciudad) {
      return this.usuariosDB.getUsuariosPorCiudad('Murcia');
    }
    return this.usuariosDB.getUsuariosPorCiudad(ciudad.trim());
  }

  constructor(private service: OpenWeatherService) {}

  //Método que se ejecuta al cargar la pagina
  ngOnInit(): void {
    this.fetchPosts('Murcia'); // C con la ciudad de Murcia
  }

  //Método que se ejecuta al pulsar el botón de buscar
  fetchPosts(ciudad: string): void {
    this.service.get6DaysForecast(ciudad).subscribe((res) => {
      this.posts = res;
    });

    this.service.getOpenWeather(ciudad).subscribe((res) => {
      this.allData = res;
    });
  }

  public mostrarDatos(ciudad: string) {
    
    if (this.ciudades.includes(ciudad.trim())) {
      ciudad += ',es';
    }
    return this.fetchPosts(ciudad);
  }

  cambiarTemperatura() {
    if (!this.esFahrenheit) {
      // Si está en Celsius, convierte a Fahrenheit
      this.allData.main.temp = +(this.allData.main.temp * 9 / 5 + 32).toFixed(2);
      this.esFahrenheit = true; // Actualiza el indposts.list[0].temp.dayicador
    } else {
      // Si ya está en Fahrenheit, convierte de nuevo a Celsius (opcional, si deseas permitir volver a Celsius)
      this.allData.main.temp = +((this.allData.main.temp - 32) * 5 / 9).toFixed(2);
      this.esFahrenheit = false; // Vuelve a Celsius
    }
  }

  getDiaSiguiente(n: number): number {
    let dia = this.fechaActual.getDay() + n;
    if (dia > 6) {
      dia = dia - 7;
    }
    return dia;
  }
}
