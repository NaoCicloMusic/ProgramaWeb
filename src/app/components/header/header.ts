import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true, // <-- SE AÑADE ESTA LÍNEA
  imports: [CommonModule, RouterLink], // <-- Y ESTA LÍNEA
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