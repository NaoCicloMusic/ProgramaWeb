import { Injectable, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  
  // Dirección de tu backend
  private baseUrl = 'http://localhost:3000'; 

  // Señales para manejar el estado
  public isAuthenticated = signal<boolean>(false);
  public userRole = signal<string>('');
  public currentUser = signal<any>(null);

  constructor() {}

  // --- LOGIN DE CLIENTE (Conectado a MySQL) ---
  loginCliente(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials).pipe(
      tap((response: any) => {
        // Si el backend dice que sí:
        this.isAuthenticated.set(true);
        this.userRole.set('cliente');
        this.currentUser.set(response.usuario); // Guardamos los datos del usuario (nombre, etc.)
        this.router.navigate(['/home']);        // Vamos a la tienda
      })
    );
  }

  // --- LOGIN DE ADMIN (Manual, como siempre) ---
  loginAdmin() {
    this.isAuthenticated.set(true);
    this.userRole.set('administrador');
    this.currentUser.set({ nombre: 'Administrador' });
    this.router.navigate(['/admin']);
  }

  // --- CERRAR SESIÓN ---
  logout() {
    this.isAuthenticated.set(false);
    this.userRole.set('');
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }
}