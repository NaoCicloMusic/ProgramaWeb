import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth.service';
import { RouterLink } from '@angular/router'; // 1. IMPORTA RouterLink

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink], // 2. AÑADE RouterLink aquí
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  public menuOptions = [
    {
      name: 'Lo Nuevo',
      subItems: ['Tendencias', 'Lanzamientos', 'Colaboraciones']
    },
    {
      name: 'Hombre',
      subItems: ['Calzado', 'Playeras', 'Pantalones', 'Sudaderas', 'Accesorios']
    },
    {
      name: 'Mujer',
      subItems: ['Calzado', 'Tops y Playeras', 'Leggings', 'Sudaderas', 'Accesorios']
    }
  ];

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}