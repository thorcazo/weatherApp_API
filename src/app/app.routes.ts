import { Routes } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PublicacionDetailsComponent } from './components/publicacion-details/publicacion-details.component';
import { AtribucionesComponent } from './components/atribuciones/atribuciones.component';
import { PublicacionesUsuariosComponent } from './components/publicaciones-usuarios/publicaciones-usuarios.component';
import { PodcastComponent } from './components/podcast/podcast.component';
import { Error404Component } from './components/error404/error404.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'user/:UserId', component: UserProfileComponent },
  { path: 'user/:userId/publicacion/:pubId', component: PublicacionDetailsComponent },
  { path: 'user/:userId/publicacion/:pubId/user/:UserId', redirectTo: 'user/:UserId' },
  { path: 'atribuciones', component: AtribucionesComponent},
  {path: 'podcast', component: PodcastComponent},
  {path: 'publicaciones-usuarios', component: PublicacionesUsuariosComponent},
  { path: '**', component: Error404Component }
];
