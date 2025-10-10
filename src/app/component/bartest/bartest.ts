import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bartest',
  standalone: true, // <-- SE AÑADE ESTA LÍNEA
  imports: [RouterLink], // <-- Y ESTA LÍNEA
  templateUrl: './bartest.html',
  styleUrls: ['./bartest.css']
})
export class Bartest {

}