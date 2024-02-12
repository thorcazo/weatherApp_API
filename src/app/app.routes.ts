import { Routes } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PublicacionDetailsComponent } from './components/publicacion-details/publicacion-details.component';
import { AtribucionesComponent } from './components/atribuciones/atribuciones.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'user/:UserId', component: UserProfileComponent },
  { path: 'user/:userId/publicacion/:pubId', component: PublicacionDetailsComponent },
  { path: 'user/:userId/publicacion/:pubId/user/:UserId', redirectTo: 'user/:UserId' },
  { path: 'atribuciones', component: AtribucionesComponent},
];
