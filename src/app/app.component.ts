import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OpenWeatherService } from './services/open-weather.service';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule,
    RouterOutlet,
    NavComponent,
    RouterLink,
    InicioComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  [x: string]: any;
  posts: any = [];

  hourlyForecastData: any = []; // Nueva propiedad para los datos del pronóstico horario
  dieciseisDiasforecastData: any = []; // Nueva propiedad para los datos del pronóstico a 16 días
  constructor(private service: OpenWeatherService) {}

  // ESTO SE EJECUTA AL INICIO
  ngOnInit(): void {
    this.fetchPosts('Murcia'); // C con la ciudad de Murcia
  }



  fetchPosts(ciudad: string): void {
    this.service.getOpenWeather(ciudad).subscribe((res) => {
      this.posts = res;
      const lat = res.coord.lat;
      const lon = res.coord.lon;

      this.loadHourlyForecast(lat, lon);
    });
  }

  public mostrarDatos(ciudad: string) {
    return this.fetchPosts(ciudad);
  }

  loadHourlyForecast(lat: number, lon: number): void {
    this.service.getHourlyForecast(lat, lon).subscribe(
      (res) => {
        console.log('Respuesta de la API de pronóstico horario:', res);
        this.hourlyForecastData = res.list; // Asegúrate de que 'res' tenga una propiedad 'list'
      },
      (error) => {
        console.error('Error al obtener el pronóstico horario:', error);
      }
    );
  }
}

