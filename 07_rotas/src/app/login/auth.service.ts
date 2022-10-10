import { EventEmitter, Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  login(usuario: Usuario) {
    if (usuario.nome === 're' && usuario.senha === '12') {
      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;

      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
