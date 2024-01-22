import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OpenWeatherService } from './services/open-weather.service';
import { Observable, Subject, switchMap } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { TiempoComponent } from './components/tiempo/tiempo.component';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule,
    RouterOutlet,
    TiempoComponent,
    NavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  posts: any = [];
  forecast: any = [];
  constructor(private service: OpenWeatherService) {}

  //busqueda predeterminada
  busqueda = this.mostrarDatos('Murcia');

  public mostrarDatos(ciudad: string) {
    return this.fetchPosts(ciudad);
  }
  ngOnInit(): void {}

  fetchPosts(ciudad: string): Observable<any> {
    return this.service.getOpenWeather(ciudad).pipe(
      tap((res) => {
        console.log(res);
        this.posts = res;
      })
    );
  }

  public getForecast(
    ciudad: string,
    lat: number,
    lon: number
  ): Observable<any> {
    return this.service.getForecast(ciudad, lat, lon);
  }

  mostrarPronostico(ciudad: string) {
    this.fetchPosts(ciudad).subscribe((datos) => {
      this.getForecast(ciudad, datos.coord.lat, datos.coord.lon).subscribe(
        (forecast) => {
          console.log(forecast);
        }
      );
    });
  }
}
