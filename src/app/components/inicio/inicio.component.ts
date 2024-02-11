import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsideComponent } from '../aside/aside.component';
import { OpenWeatherService } from '../../services/open-weather.service';
import { UsuariosService } from '../../services/usuarios.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink, AsideComponent, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {

  posts: any = [];
  allData: any = [];
  fechaActual = new Date()

  dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
  nombreDia = this.dias[this.fechaActual.getDay()]

  hora = this.fechaActual.getHours()
  minuto = this.fechaActual.getMinutes()

  esFahrenheit: boolean = false

  ciudades: Array<any> = [
    'Cartagena',
    'Cordoba',
    'Córdoba'
  ]

  private usuariosDB = inject(UsuariosService)

  getUsuarios() {
    return this.usuariosDB.getUsuarios()
  }

  getusuariosPorCiudad(ciudad: string) {
    if (!ciudad) {
      return this.usuariosDB.getUsuariosPorCiudad("Murcia")
    }
    return this.usuariosDB.getUsuariosPorCiudad(ciudad.trim())
  }

  constructor(private service: OpenWeatherService) { }

  ngOnInit(): void {
    this.fetchPosts('Murcia'); // C con la ciudad de Murcia

  }

  fetchPosts(ciudad: string): void {
    this.service.get6DaysForecast(ciudad).subscribe((res) => {
      this.posts = res;
      console.log(this.posts);  // Muestra los datos en la consola
    });

    this.service.getOpenWeather(ciudad).subscribe((res) => {
      this.allData = res;
      console.log(this.allData);  // Muestra los datos en la consola
    });
  }

  public mostrarDatos(ciudad: string) {
    if (this.ciudades.includes(ciudad.trim())) {
      ciudad += ',es';
    }

    return this.fetchPosts(ciudad);
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

  getDiaSiguiente(n: number): number {
    let dia = this.fechaActual.getDay() + n;
    if (dia > 6) {
      dia = dia - 7;
    }
    return dia
  }
}
