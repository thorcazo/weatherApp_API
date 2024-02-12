import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service'; // Assuming the correct path to the service
import { PublicacionDetailsComponent } from '../components/publicacion-details/publicacion-details.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css'],
  standalone: true,
  imports: [PublicacionDetailsComponent, RouterLink] // Si tu servicio o componentes adicionales necesitan ser importados, hazlo aquí.
})
export class PublicacionesComponent implements OnInit {
  publicacionesPorCiudad: { [ciudad: string]: any[] } = {};
PublicacionDetails: any;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
  }
  


    getPublicacionesPorID(userId: number) {
    return this.usuariosService.getPublicacionesPorId2(userId);
    }

    getUsuarios() {
    return this.usuariosService.getUsuarios();
    }
  }
  


 
