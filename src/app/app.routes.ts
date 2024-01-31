import { Routes } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PublicacionDetailsComponent } from './components/publicacion-details/publicacion-details.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'user/publicacion', component: PublicacionDetailsComponent },
  { path: 'user/publicacion/user', redirectTo: 'user' },
];
