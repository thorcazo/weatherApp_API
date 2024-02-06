import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OpenWeatherService } from './services/open-weather.service';
import { Observable, Subject, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  posts: any = [];
  posts2: any = []; 

  constructor(private service: OpenWeatherService) {}

  ngOnInit(): void {}

  fetchPosts(ciudad: string): void {
    this.service.getOpenWeather(ciudad).subscribe((res) => {
      console.log(res);
      this.posts = res;
    });
  }

  public mostrarDatos(ciudad: string) {
    return this.fetchPosts(ciudad);
  }

  busqueda = this.mostrarDatos('Murcia');
}
