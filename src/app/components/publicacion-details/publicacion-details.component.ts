import { Component, inject } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-publicacion-details',
  standalone: true,
  imports: [UserProfileComponent, RouterLink],
  templateUrl: './publicacion-details.component.html',
  styleUrl: './publicacion-details.component.css',
})
export class PublicacionDetailsComponent {
  private serviceUsers = inject(UsuariosService);


route: ActivatedRoute = inject(ActivatedRoute);

publicacionDetails: any | undefined;

mostrarPublicacion() {
  console.log(this.publicacionDetails);
}


constructor() {
  const publicacionId = Number(this.route.snapshot.params['id']); 
  this.mostrarPublicacion();
  this.publicacionDetails = this.serviceUsers.getpublicacionPorId(publicacionId);
 }



}
