import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Agrega CommonModule
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule], // Importa CommonModule aquí
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  loginObj = {
    correo: '',
    password: ''
  };
  
  userType: string = 'cliente';
  
  // NUEVO: Variable para ver/ocultar contraseña
  showPassword = false;

  constructor(private authService: AuthService) {}

  // NUEVO: Función para alternar el ojito
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  // Tu lógica original intacta
  onLogin() {
    if (this.userType === 'administrador') {
      if (this.loginObj.correo === 'admin' && this.loginObj.password === 'admin') {
        this.authService.loginAdmin();
      } else {
        alert("Datos de administrador incorrectos");
      }
    } else {
      this.authService.loginCliente(this.loginObj).subscribe({
        next: () => {
          console.log('¡Bienvenido!');
        },
        error: (error) => {
          console.error(error);
          alert("Correo o contraseña incorrectos (Verifica que el usuario exista en MySQL)");
        }
      });
    }
  }
}