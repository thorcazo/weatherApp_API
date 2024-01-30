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

//APP COMPONENT
export class AppComponent {
  imagenDesierto =
    'https://images.unsplash.com/photo-1683009680116-b5c04463551d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  imagenPrueba =
    'https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  imgAbstracta =
    'https://plus.unsplash.com/premium_photo-1672329275106-073b5493c00f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  http = inject(HttpClient);
  service = inject(OpenWeatherService);
  //arrays donde se almacenaran los datos
  tiempo: any = [];
  tiempoPronostico: any = [];
  //busqueda predeterminada
  busqueda = this.mostrarDatos('Murcia');

  mostrarDatos(ciudad: string) {
    return this.fetchtiempo(ciudad);
  }

  fetchtiempo(ciudad: string): Observable<any> {
    return this.service.getOpenWeather(ciudad).pipe(
      tap((res) => {
        this.tiempo = res;
      })
    );
  }

  getForecast(ciudad: string, lat: number, lon: number): Observable<any> {
    return this.service.getForecast(ciudad, lat, lon);
  }

  mostrartiempoPronostico(ciudad: string) {
    this.fetchtiempo(ciudad).subscribe((datos) => {
      this.getForecast(ciudad, datos.coord.lat, datos.coord.lon).subscribe(
        (forecast) => {
          console.log(datos);
          console.log(forecast);
          let diaActual = new Date();
          this.tiempo = {
            ciudad: datos.name,
            dia: diaActual.toLocaleDateString('es-ES', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
            pais: datos.sys.country,
            temperatura: datos.main.temp,
            max: datos.main.temp_max,
            min: datos.main.temp_min,
            hora: this.convertirTimestampAHorasMinutos(datos.dt),
            descripcion: datos.weather[0].description,
            viento: datos.wind.speed,
            humedad: datos.main.humidity,
          };
          console.log(this.tiempo);
          this.tiempoPronostico = forecast;
        }
      );
    });
  }

  convertirTimestampAHorasMinutos(timestamp: number) {
    // Verificar si el timestamp es un número válido
    if (!isNaN(timestamp) && Number.isFinite(timestamp)) {
      var fecha = new Date(timestamp * 1000);
      var horas = fecha.getHours();
      var minutos = '0' + fecha.getMinutes();
      return horas + ':' + minutos.substr(-2);
    } else {
      return '';
    }
  }
}
