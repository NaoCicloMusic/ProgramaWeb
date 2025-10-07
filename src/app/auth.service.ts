import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated = signal<boolean>(false);
  public userRole = signal<string>('');

  constructor(private router: Router) { }

  login(role: string) {
    this.isAuthenticated.set(true);
    this.userRole.set(role);
    if (role === 'administrador') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/home']);
    }
  }

  logout() {
    this.isAuthenticated.set(false);
    this.userRole.set('');
    this.router.navigate(['/login']);
  }
}