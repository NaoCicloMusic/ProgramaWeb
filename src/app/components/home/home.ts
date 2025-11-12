import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { ProductosService, Producto } from '../../services/productos'; 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  listaDeProductos: Producto[] = [];
  constructor(private productosService: ProductosService) {}
  ngOnInit(): void {
 
    this.listaDeProductos = this.productosService.obtenerProductos();
  }
}