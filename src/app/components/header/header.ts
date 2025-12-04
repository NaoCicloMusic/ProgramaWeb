import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../auth.service';
import { StoreService } from '../../services/store'; // Import desde 'store'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  public menuOptions = [
    { name: 'Lo Nuevo', subItems: ['Tendencias', 'Lanzamientos'] },
    { name: 'Hombre', subItems: ['Calzado', 'Ropa'] },
    { name: 'Mujer', subItems: ['Calzado', 'Ropa'] }
  ];

  constructor(public authService: AuthService, public storeService: StoreService) {}

  logout() {
    this.authService.logout();
  }
}