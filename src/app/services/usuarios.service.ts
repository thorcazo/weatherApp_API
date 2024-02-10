import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  private usuarios = [
    {
      id: 1,
      nombre: 'Juan',
      ciudad: 'Murcia',
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
      ciudad: 'Murcia',
      imagenPerfil: 'Ana.jpg',
      publicaciones: [
        {
          id: 2,
          comentario: 'Una noche estupenda',
          url: '/img-noche.jpg'
        }]
    },
    { id: 3, nombre: 'Sergio', ciudad: 'Murcia', imagenPerfil: 'imagen3.jpg', comentario: 'Tiempo genial para salir a pasear' },
    {
      id: 4,
      nombre: 'Pablo',
      ciudad: 'Madrid',
      imagenPerfil: 'Pablo.png',
      publicaciones: [
        {
          id: 3,
          comentario: 'Hoy está nublado y hace frio',
          url: '/img-nublado.jpg'
        }

      ]
    },
    { id: 5, nombre: 'Sofia', ciudad: 'Madrid', imagenPerfil: 'imagen5.jpg', comentario: 'No es el mejor día para ir al monte' },
    { id: 6, nombre: 'Maria', ciudad: 'Madrid', imagenPerfil: 'imagen6.jpg', comentario: 'Hace mucho viento, mejor estar en casa' },
    { id: 7, nombre: 'Joan', ciudad: 'Barcelona', imagenPerfil: 'imagen7.jpg', comentario: 'Avui fa sol.' },
    { id: 8, nombre: 'Sergi', ciudad: 'Barcelona', imagenPerfil: 'imagen8.jpg', comentario: 'Demà plourà.' },
    { id: 9, nombre: 'Adrià', ciudad: 'Barcelona', imagenPerfil: 'imagen9.jpg', comentario: "Aquesta nit fa fred." }
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
            // Crear y devolver un objeto que contenga tanto la publicación como los detalles del usuario
            return {
              usuario: {
                id: usuario.id,
                nombre: usuario.nombre,
                ciudad: usuario.ciudad,
                imagenPerfil: usuario.imagenPerfil
              },
              publicacion
            };
          }
        }
      }
    }
    return null; // Devuelve null si no encuentra la publicación y el usuario
  }





  constructor() { }
}
