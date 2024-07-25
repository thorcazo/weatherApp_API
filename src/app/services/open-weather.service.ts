import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment as env } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class OpenWeatherService {

  apikeySergio = env.apikeySergio;

  constructor(private http: HttpClient) {}

  // Obtener coordenadas de la ciudad
  getCoordinates(ciudad: string): Observable<any> {
    const geocodingUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&limit=1&appid=${this.apikeySergio}`;
    return this.http.get<any>(geocodingUrl);
  }

  // Obtener el clima actual utilizando las coordenadas
  getOpenWeather(ciudad: string): Observable<any> {
    return this.getCoordinates(ciudad).pipe(
      switchMap((data: any) => {
        if (data.length === 0) {
          throw new Error('No se encontraron coordenadas para la ciudad especificada.');
        }
        const { lat, lon } = data[0];

        const weatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&lang=es&appid=${this.apikeySergio}&units=metric`;
        return this.http.get<any>(weatherUrl);
      })
    );
  }

   // Obtener el pronóstico de 6 días utilizando las coordenadas
   get6DaysForecast(ciudad: string): Observable<any> {
    return this.getCoordinates(ciudad).pipe(
      switchMap((data: any) => {
        if (data.length === 0) {
          throw new Error('No se encontraron coordenadas para la ciudad especificada.');
        }
        const { lat, lon } = data[0];
        const forecastUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&lang=es&appid=${this.apikeySergio}&units=metric`;
        console.log(forecastUrl);
        return this.http.get<any>(forecastUrl);
      })
    );
  }
}
