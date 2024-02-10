import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  private usuarios = [
    { id: 1, nombre: 'Juan', ciudad: 'murcia', imagenPerfil: 'imagen1.jpg', comentario: 'Buen tiempo, día soleado'},
    { id: 2, nombre: 'Ana', ciudad: 'murcia', imagenPerfil: 'imagen2.jpg', comentario: 'Tiempo estupendo, sin nubes ni viento!' },
    { id: 3, nombre: 'Sergio', ciudad: 'murcia', imagenPerfil: 'imagen3.jpg', comentario: 'Tiempo genial para salir a pasear' },
    { id: 4, nombre: 'Pablo', ciudad: 'madrid', imagenPerfil: 'imagen4.jpg', comentario: 'Hoy está nublado y hace frio' },
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



  constructor() { }
}
