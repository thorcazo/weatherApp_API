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


publiDet: any | undefined;

mostrarPublicacion() {
  console.log(this.publiDet);
}
constructor(private route: ActivatedRoute) { }


ngOnInit() {
  const id = +this.route.snapshot.paramMap.get('id')! ;
  this.publiDet = this.serviceUsers.getpublicacionPorId(id);
}
}
