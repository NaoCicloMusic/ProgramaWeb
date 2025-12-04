import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth.service'; // Importamos AuthService

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule], // Importamos CommonModule
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  // Inyectamos el servicio para leer los datos del usuario
  constructor(public authService: AuthService) {}
}