import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OpenWeatherService {
  apiKey2_5 = "6cb893d8843f80c3b9081158c18b2c62";
  apikey3 = '9bc40ed127e45cde7e2feff6ef84de67';
  apikeySergio  = '015df87d94696439dd895c7ee794488b';
  constructor(private http: HttpClient) {}

  getOpenWeather(ciudad: string): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${this.apikeySergio}&units=metric`;
    return this.http.get<any>(url);
  } 

  getHourlyForecast(lat: number, lon: number): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.apikeySergio}&units=metric`;
    return this.http.get<any>(url);
  }


}
