import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private usuarios = [
    {
      id: 1,
      nombre: 'Roberto',
      ciudad: 'Murcia',
      imagenPerfil: 'Roberto.png',

      publicaciones: [
        {
          id: 1,
          comentario: 'Buen tiempo, día soleado',
          url: '/img-amanecer.jpg',
          fechaPublicacion: '2020-10-10',
        },
        {
          id: 2,
            comentario: 'Grabé un día de lluvia en Murcia, increíble',
          url: '/lluvia.mp4',
          fechaPublicacion: '2020-10-10',
        },
      ],
    },
    {
      id: 2,
      nombre: 'Ana',
      ciudad: 'Murcia',
      imagenPerfil: 'Ana.png',
      publicaciones: [
        {
          id: 1,
          comentario: 'Una noche estupenda',
          url: '/gen-img-noche.jpg',
          fechaPublicacion: '2021-11-10',
        },
      ],
    },
    {
      id: 3,
      nombre: 'Sergio',
      ciudad: 'Murcia',
      imagenPerfil: 'imagen3.jpg',
      comentario: 'Tiempo genial para salir a pasear',
    },
    {
      id: 4,
      nombre: 'Pablo',
      ciudad: 'Madrid',
      imagenPerfil: 'Pablo.png',
      publicaciones: [
        {
          id: 1,
          comentario: 'Llueve mucho, mejor quedarse en casa',
          url: '/img-lluvia.jpg',
          atribucion: 'https://www.que.madrid/',
        },
      ],
    },
    {
      id: 5,
      nombre: 'Sofia',
      ciudad: 'Madrid',
      imagenPerfil: 'Sofia.png',
      publicaciones: [
        {
          id: 1,
          comentario: 'Una buena noche para salir a cenar',
          url: '/img-noche.jpg',
          atribucion:
            'https://www.freepik.es/foto-gratis/cruce-calle-alcala-gran-via-noche_1328398.htm#query=Madrid&position=3&from_view=search&track=sph&uuid=571cda21-74ab-4b85-b2f0-2f33e4824f04?log-in=google',
        },
      ],
    },
    {
      id: 6,
      nombre: 'Maria',
      ciudad: 'Madrid',
      imagenPerfil: 'Maria.png',
      publicaciones: [
        {
          id: 1,
          comentario: 'Hoy hace una noche estupenda para salir',
          url: '/gen-img-atardecer.jpg',
        },
      ],
    },
    {
      id: 7,
      nombre: 'Joan',
      ciudad: 'Barcelona',
      imagenPerfil: 'imagen7.png',
      comentario: 'Avui fa sol.',
    },
    {
      id: 8,
      nombre: 'Sergi',
      ciudad: 'Barcelona',
      imagenPerfil: 'imagen8.png',
      comentario: 'Demà plourà.',
    },
    {
      id: 9,
      nombre: 'Adrià',
      ciudad: 'Barcelona',
      imagenPerfil: 'imagen9.png',
      comentario: 'Aquesta nit fa fred.',
    },
    {
      id: 10,
      nombre: 'Jaime',
      ciudad: 'Murcia',
      imagenPerfil: 'Jaime.png',
      publicaciones: [
        {
          id: 1,
          comentario: 'Hoy hace un día estupendo para salir a pasear',
          url: '/gen-img-lluvioso.jpg',
        },
      ],
    },
  ];

  getUsuarios() {
    return this.usuarios;
  }

  getUsuariosPorCiudad(ciudad: string) {
    /* Para que la primera letra siempre sea mayuscula */
    ciudad = ciudad.charAt(0).toUpperCase() + ciudad.slice(1).toLowerCase();
    return this.usuarios.filter((usuario) => usuario.ciudad == ciudad);
  }

  getpublicacionPorId(userId: number, pubId: number): any {
    const usuario = this.usuarios.find((u) => u.id === userId);
    const publicacion = usuario?.publicaciones?.find((p) => p.id === pubId);

    if (usuario && publicacion) {
      // Retorna un objeto que contiene tanto el usuario como la publicación.
      return {
        usuario: {
          id: usuario.id,
          nombre: usuario.nombre,
          ciudad: usuario.ciudad,
          imagenPerfil: usuario.imagenPerfil,
        },
        publicacion: {
          id: publicacion.id,
          comentario: publicacion.comentario,
          url: publicacion.url,
        },
      };
    }
    return null; // Devuelve null si no se encuentra el usuario o la publicación.
  }

  getPublicacionesPorId2(userId: number) {
    const usuario = this.usuarios.find((u) => u.id === userId);
    return usuario?.publicaciones || [];
  }
  /* getUsuariobyId */
  getUsuariobyId(userId: number) {
    return this.usuarios.find((u) => u.id === userId);
  }
  getPublicaciones() {
    return this.usuarios.map((u) => u.publicaciones).flat();
  }
  getCiudades() {
    return this.usuarios
      .map((u) => u.ciudad)
      .filter((v, i, a) => a.indexOf(v) === i);
  }
}
