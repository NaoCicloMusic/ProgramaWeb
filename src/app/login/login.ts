import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  // Objeto para guardar lo que escribes en el formulario
  loginObj = {
    correo: '',    // Antes era 'id'
    password: ''
  };
  
  userType: string = 'cliente'; // Por defecto es cliente

  constructor(private authService: AuthService) {}

  onLogin() {
    if (this.userType === 'administrador') {
      // --- ADMIN (Sigue igual: admin / admin) ---
      if (this.loginObj.correo === 'admin' && this.loginObj.password === 'admin') {
        this.authService.loginAdmin();
      } else {
        alert("Datos de administrador incorrectos");
      }
    } else {
      // --- CLIENTE (Ahora verifica con MySQL) ---
      this.authService.loginCliente(this.loginObj).subscribe({
        next: () => {
          console.log('¡Bienvenido!');
          // La redirección la hace el servicio
        },
        error: (error) => {
          console.error(error);
          alert("Correo o contraseña incorrectos (Verifica que el usuario exista en MySQL)");
        }
      });
    }
  }
}