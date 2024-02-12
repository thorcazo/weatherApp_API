import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class OpenWeatherService {


  apikeySergio = env.apikeySergio;

  constructor(private http: HttpClient) {}

  getOpenWeather(ciudad: string): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&appid=${this.apikeySergio}&units=metric`;
    return this.http.get<any>(url);
  }

  get6DaysForecast(ciudad: string): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${ciudad}&cnt=${6}&appid=${
      this.apikeySergio
    }&units=metric`;
    return this.http.get<any>(url);
  }
}
