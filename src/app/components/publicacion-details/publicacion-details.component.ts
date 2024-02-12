import { Component, inject, Input } from '@angular/core';
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
  private route: ActivatedRoute = inject(ActivatedRoute);
  publiDet: any | undefined;

  ngOnInit() {
    const userId = this.route.snapshot.params['userId'];
    const pubId = this.route.snapshot.params['pubId'];

    if (userId && pubId) {
      this.publiDet = this.serviceUsers.getpublicacionPorId(+userId, +pubId);
    }
  }
}
