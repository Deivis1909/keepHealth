import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getUsuarioSalvo() {
    const usuarioString = localStorage.getItem('usuarioCriado');
    return usuarioString ? JSON.parse(usuarioString) : null;
  }
}
