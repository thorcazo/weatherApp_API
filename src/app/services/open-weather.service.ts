import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenWeatherService {
  apiKey = '';

  constructor(private http: HttpClient) {}

  getOpenWeather(ciudad: string): Observable<any> {
    return this.http.get<any>(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&appid=${this.apiKey}&units=metric`
    );
  }

  /* https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key} */

  getForecast(ciudad: string, lat: number, lon: number): Observable<any> {
    return this.http.get<any>(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`
    );
  }
}
