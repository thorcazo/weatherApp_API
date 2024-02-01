import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { InicioComponent } from './components/inicio/inicio.component';

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

//APP COMPONENT
export class AppComponent {
  // http = inject(HttpClient);
  // service = inject(OpenWeatherService);
  // //arrays donde se almacenaran los datos
  // tiempo: any = [];
  // tiempoPronostico: any = [];
  // //busqueda predeterminada
  // busqueda = this.mostrarDatos('Murcia');
  // mostrarDatos(ciudad: string) {
  //   return this.fetchtiempo(ciudad);
  // }
  // fetchtiempo(ciudad: string): Observable<any> {
  //   return this.service.getOpenWeather(ciudad).pipe(
  //     tap((res) => {
  //       this.tiempo = res;
  //     })
  //   );
  // }
  // getForecast(ciudad: string, lat: number, lon: number): Observable<any> {
  //   return this.service.getForecast(ciudad, lat, lon);
  // }
  // mostrartiempoPronostico(ciudad: string) {
  //   this.fetchtiempo(ciudad).subscribe((datos) => {
  //     this.getForecast(ciudad, datos.coord.lat, datos.coord.lon).subscribe(
  //       (forecast) => {
  //         console.log(datos);
  //         console.log(forecast);
  //         let diaActual = new Date();
  //         this.tiempo = {
  //           ciudad: datos.name,
  //           dia: diaActual.toLocaleDateString('es-ES', {
  //             weekday: 'long',
  //             year: 'numeric',
  //             month: 'long',
  //             day: 'numeric',
  //           }),
  //           pais: datos.sys.country,
  //           temperatura: datos.main.temp,
  //           max: datos.main.temp_max,
  //           min: datos.main.temp_min,
  //           hora: this.convertirTimestampAHorasMinutos(datos.dt),
  //           descripcion: datos.weather[0].description,
  //           viento: datos.wind.speed,
  //           humedad: datos.main.humidity,
  //         };
  //         console.log(this.tiempo);
  //         this.tiempoPronostico = forecast;
  //       }
  //     );
  //   });
  // }
  // convertirTimestampAHorasMinutos(timestamp: number) {
  //   // Verificar si el timestamp es un número válido
  //   if (!isNaN(timestamp) && Number.isFinite(timestamp)) {
  //     var fecha = new Date(timestamp * 1000);
  //     var horas = fecha.getHours();
  //     var minutos = '0' + fecha.getMinutes();
  //     return horas + ':' + minutos.substr(-2);
  //   } else {
  //     return '';
  //   }
  // }
}
