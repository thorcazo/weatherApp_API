import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  private usuarios = [
    {
      id: 1,
      nombre: 'Juan',
      ciudad: 'murcia',
      imagenPerfil: 'Juan.png',

      publicaciones: [
        {
          id: 1,
          comentario: 'Buen tiempo, día soleado',
          url: '/img-amanecer.jpg'
        }]

    },
    {
      id: 2,
      nombre: 'Ana',
      ciudad: 'murcia',
      imagenPerfil: 'Ana.jpg',
      publicaciones: [
        {
          id: 2,
          comentario: 'Una noche estupenda',
          url: '/img-noche.jpg'
        }]
    },
    { id: 3, nombre: 'Sergio', ciudad: 'murcia', imagenPerfil: 'imagen3.jpg', comentario: 'Tiempo genial para salir a pasear' },
    {
      id: 4,
      nombre: 'Pablo',
      ciudad: 'madrid',
      imagenPerfil: 'Pablo.png',
      publicaciones: [
        {
          id: 3,
          comentario: 'Hoy está nublado y hace frio',
          url: '/img-nublado.jpg'
        }

      ]
    },
    { id: 5, nombre: 'Sofia', ciudad: 'madrid', imagenPerfil: 'imagen5.jpg', comentario: 'No es el mejor día para ir al monte' },
    { id: 6, nombre: 'Maria', ciudad: 'madrid', imagenPerfil: 'imagen6.jpg', comentario: 'Hace mucho viento, mejor estar en casa' },
    { id: 7, nombre: 'Joan', ciudad: 'barcelona', imagenPerfil: 'imagen7.jpg', comentario: 'Avui fa sol.' },
    { id: 8, nombre: 'Sergi', ciudad: 'barcelona', imagenPerfil: 'imagen8.jpg', comentario: 'Demà plourà.' },
    { id: 9, nombre: 'Adrià', ciudad: 'barcelona', imagenPerfil: 'imagen9.jpg', comentario: "Aquesta nit fa fred." }
  ]

  getUsuarios() {
    return this.usuarios
  }

  getUsuariosPorCiudad(ciudad: string) {
    return this.usuarios.filter(usuario => usuario.ciudad == ciudad)
  }

  
  getpublicacionPorId(id: number): any {
    for (let usuario of this.usuarios) {
      if (usuario.publicaciones) {
        for (let publicacion of usuario.publicaciones) {
          if (publicacion.id === id) {
            return publicacion;
          }
        }
      }
    }
    return null; // Devuelve null si no encuentra la publicación
  }
  



  constructor() { }
}
