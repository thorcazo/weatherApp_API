import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OpenWeatherService {
  apiKey = env.apiKey;

  constructor(private http: HttpClient) {}

  getOpenWeather(ciudad: string): Observable<any> {
    return this.http.get<any>(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&appid=${this.apiKey}&units=metric`
    );
  }

  getForecast(ciudad: string, lat: number, lon: number): Observable<any> {
    return this.http.get<any>(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&lang=es&appid=${this.apiKey}&units=metric`
    );
  }
}
