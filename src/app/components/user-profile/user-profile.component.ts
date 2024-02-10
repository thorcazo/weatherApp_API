import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  private serviceUsers = inject(UsuariosService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  usuario: any | undefined;


  ngOnInit() {
    const userId = this.route.snapshot.params['UserId'];

    if (userId) {
      this.usuario = this.serviceUsers.getUsuariobyId(+userId);
    }
  }





}
