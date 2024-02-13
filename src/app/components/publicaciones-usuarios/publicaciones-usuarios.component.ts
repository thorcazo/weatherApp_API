import { Component, inject } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-publicaciones-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './publicaciones-usuarios.component.html',
  styleUrl: './publicaciones-usuarios.component.css'
})
export class PublicacionesUsuariosComponent {
  private serviceUsuarios = inject(UsuariosService);

  publicaciones: any = [];  


  ngOnInit() {

  }

  getUsuarios(){
    this.publicaciones = this.serviceUsuarios.getUsuarios() 
    console.log(this.publicaciones)
  }

}
