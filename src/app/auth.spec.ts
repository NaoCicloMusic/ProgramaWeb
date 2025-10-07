import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Una "señal" para saber si el usuario está autenticado.
  // Inicia en 'false' (no autenticado).
  public isAuthenticated = signal<boolean>(false);
  public userRole = signal<string>('');

  constructor(private router: Router) { }

  // Método para iniciar sesión
  login(role: string) {
    this.isAuthenticated.set(true); // Cambiamos la señal a 'true'
    this.userRole.set(role);
    if (role === 'administrador') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/home']);
    }
  }

  // Método para cerrar sesión
  logout() {
    this.isAuthenticated.set(false); // Cambiamos la señal a 'false'
    this.userRole.set('');
    this.router.navigate(['/login']);
  }
}