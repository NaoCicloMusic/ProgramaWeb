import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../services/productos';
import { StoreService } from '../../services/store'; // Importamos el Store
import { Producto } from '../../models/ts.models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  
  productList: Producto[] = [];

  constructor(
    private productosService: ProductosService,
    private storeService: StoreService // Inyectamos el servicio
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productosService.getProductos().subscribe((data) => {
      this.productList = data;
    });
  }

  // Funciones para los botones
  agregarAlCarrito(producto: Producto) {
    this.storeService.addToCart(producto);
  }

  agregarAFavoritos(producto: Producto) {
    this.storeService.addToFavorites(producto);
  }
}