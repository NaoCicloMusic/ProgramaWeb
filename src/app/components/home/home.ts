import { Component, OnInit } from '@angular/core'; // Importa OnInit
import { CommonModule } from '@angular/common';
// Importa el servicio y la interfaz
import { ProductosService, Producto } from '../../services/productos'; // Sin .service
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit { // Implementa OnInit
  // Declara una variable para guardar los productos
  listaDeProductos: Producto[] = [];

  // Inyecta el ProductosService
  constructor(private productosService: ProductosService) {}

  // ngOnInit se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
    // Llama al método del servicio para obtener los productos
    this.listaDeProductos = this.productosService.obtenerProductos();
  }
}