import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../services/productos';
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

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productosService.getProductos().subscribe((data) => {
      this.productList = data;
    });
  }
}