import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class OpenWeatherService {
  apikey = env.APIKEY2_5;
  
  constructor(private http: HttpClient) {}

  getOpenWeather(ciudad: string): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${this.apikey}&units=metric`;
    return this.http.get<any>(url);
  } 

  getHourlyForecast(lat: number, lon: number): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.apikey}&units=metric`;
    return this.http.get<any>(url);
  }

  get16DaysForecast(lat: number, lon: number): Observable<any> {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&lang=es&appid=${this.apikey}&units=metric`;
    return this.http.get<any>(url);
  }
}
