import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth.service'; // 1. Importa el servicio

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  public headerOptions: string[] = ['lo Nuevo', 'Hombre'];
  public headerIcons: string[] = ['<i class="bi bi-bag-heart-fill"></i>'];

  // 2. Inyecta el servicio en el constructor
  constructor(private authService: AuthService) {}

  // 3. Crea el método para cerrar sesión
  logout() {
    this.authService.logout();
  }
}