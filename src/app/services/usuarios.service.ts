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
          url: '/img-amanecer.jpg',
          fechaPublicacion: '2020-10-10'
        }]

    },
    {
      id: 2,
      nombre: 'Ana',
      ciudad: 'Murcia',
      imagenPerfil: 'Ana.png',
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
    { id: 5, nombre: 'Sofia', 
    ciudad: 'Madrid', 
    imagenPerfil: 'Sofia.png',
    publicaciones: [
      {
        id: 4,
        comentario: 'No es el mejor día para ir al monte',
        url: '/img-lluvia.jpg'
      },
   
    ] 
     },
    { id: 6, nombre: 'Maria', ciudad: 'Madrid', imagenPerfil: 'imagen6.png', comentario: 'Hace mucho viento, mejor estar en casa' },
    { id: 7, nombre: 'Joan', ciudad: 'Barcelona', imagenPerfil: 'imagen7.png', comentario: 'Avui fa sol.' },
    { id: 8, nombre: 'Sergi', ciudad: 'Barcelona', imagenPerfil: 'imagen8.png', comentario: 'Demà plourà.' },
    { id: 9, nombre: 'Adrià', ciudad: 'Barcelona', imagenPerfil: 'imagen9.png', comentario: "Aquesta nit fa fred." }
  ]

  getUsuarios() {
    return this.usuarios
  }

  getUsuariosPorCiudad(ciudad: string) {
    return this.usuarios.filter(usuario => usuario.ciudad == ciudad)
  }

  getpublicacionPorId(userId: number, pubId: number): any {
    const usuario = this.usuarios.find(u => u.id === userId);
    const publicacion = usuario?.publicaciones?.find(p => p.id === pubId);
    
    if (usuario && publicacion) {
      // Retorna un objeto que contiene tanto el usuario como la publicación.
      return {
        usuario: {
          id: usuario.id,
          nombre: usuario.nombre,
          ciudad: usuario.ciudad,
          imagenPerfil: usuario.imagenPerfil
        },
        publicacion: {
          id: publicacion.id,
          comentario: publicacion.comentario,
          url: publicacion.url
        }
      };
    }
    return null; // Devuelve null si no se encuentra el usuario o la publicación.
  }

  /* getUsuariobyId */
  getUsuariobyId(userId: number) {
    return this.usuarios.find(u => u.id === userId);
  }
}
