import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../../services/productos'; // Importa tu servicio
import { Producto } from '../../models/ts.models'; // Importa tu modelo

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class Admin implements OnInit {
  
  productList: Producto[] = []; 

  productObj: Producto = {
    nombre: '',
    descripcion: '',
    precio: 0,
    foto: '' 
  };

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productosService.getProductos().subscribe((data) => {
      this.productList = data;
    });
  }

  onsaveRecord() {
    this.productosService.crearProducto(this.productObj).subscribe(() => {
      alert('Producto agregado a la Base de Datos!');
      this.loadProducts(); // Recarga la tabla
      this.productObj = { nombre: '', descripcion: '', precio: 0, foto: '' };
    });
  }
}