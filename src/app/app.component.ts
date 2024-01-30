import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OpenWeatherService } from './services/open-weather.service';
import { Observable, Subject, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
[x: string]: any;
  http = inject(HttpClient);
  posts: any = [];

  hourlyForecastData: any = []; // Nueva propiedad para los datos del pronóstico horario
  dieciseisDiasforecastData: any = []; // Nueva propiedad para los datos del pronóstico a 16 días
  constructor(private service: OpenWeatherService) {}

  ngOnInit(): void {
    this.fetchPosts('Murcia'); // Carga inicial con la ciudad de Murcia
    this.loadHourlyForecast(37.9922, -1.1307); // Latitud y longitud de Murcia
    this.loadDiecesisDiasForecast(37.9922, -1.1307); // Latitud y longitud de Murcia
  }
  loadHourlyForecast(lat: number, lon: number): void {
    this.service.getHourlyForecast(lat, lon).subscribe(
      (res) => {
        console.log('Respuesta de la API de pronóstico horario:', res);
        this.hourlyForecastData = res.list; 
      },
      (error) => {
        console.error('Error al obtener el pronóstico horario:', error);
      }
    );
  }
  
  loadDiecesisDiasForecast(lat: number, lon: number): void {
    this.service.get16DaysForecast(lat, lon).subscribe(
      (res) => {
        console.log('Respuesta de la API de pronóstico a 16 días:', res);
        this.dieciseisDiasforecastData = res.list; 
      },
      (error) => {
        console.error('Error al obtener el pronóstico a 16 días:', error);
      }
    );
  }
  
  fetchPosts(ciudad: string): void {
    this.service.getOpenWeather(ciudad).subscribe((res) => {
      this.posts = res;
    });
  }

  public mostrarDatos(ciudad: string) {
    return this.fetchPosts(ciudad);
  }

  
  // fetchPosts(ciudad: string): Observable<any> {
  //   return this.service.getOpenWeather(ciudad).pipe(
  //     tap((res) => {
  //       console.log(res);
  //       this.posts = res;
  //     })
  //   );
  // }

  // public getForecast(
  //   ciudad: string,
  //   lat: number,
  //   lon: number
  // ): Observable<any> {
  //   return this.service.getForecast(ciudad, lat, lon);
  // }

  // mostrarPronostico(ciudad: string) {
  //   this.fetchPosts(ciudad).subscribe((datos) => {
  //     this.getForecast(ciudad, datos.coord.lat, datos.coord.lon).subscribe(
  //       (forecast) => {
  //         console.log(forecast);
  //       }
  //     );
  //   });

  

}
