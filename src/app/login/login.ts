import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service'; // 1. Importa el servicio

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  userType: string = 'cliente';

  // 2. Inyecta el servicio en el constructor
  constructor(private authService: AuthService) {}

  login() {
    // 3. Llama al método login del servicio en lugar de usar el router directamente
    this.authService.login(this.userType);
  }
}