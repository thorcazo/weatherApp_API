import { Component, } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { UsuariosService } from './services/usuarios.service';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { AsideComponent } from './components/aside/aside.component';
import { PieComponent } from './components/pie/pie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule,
    RouterOutlet,
    NavComponent,
    RouterLink,
    InicioComponent, AsideComponent,PublicacionesComponent,
    PieComponent, HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {


}
