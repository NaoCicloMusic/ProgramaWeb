import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login { // Se queda como 'Login'
  userType: string = 'usuario';
loginOBJ:any={
correo:'',
password: '',
ID: ''
}
 router=inject(Router);

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.userType);
  }
  onlogin(){
    if( this.loginOBJ.ID=='01'&&this.loginOBJ.password=='123'){
      this.router.navigateByUrl('home')
    }
      else{
 alert ("wrong credentials");
      }

    
  }
}