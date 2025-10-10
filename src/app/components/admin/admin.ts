import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class Admin {
  productObj = {
    nam: '',
    description: '',
    price: null,
    image: '' // Campo para la imagen
  };

  // Mantenemos una lista local para la tabla del admin
  localProductList: any[] = [];

  constructor(private authService: AuthService) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.productObj.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onsaveRecord() {
    // 1. Añadimos el producto a la lista local (para la tabla del admin)
    this.localProductList.push({ ...this.productObj });

    // 2. Añadimos el producto al servicio (para la vista del cliente)
    this.authService.productList.update(currentProducts => [...currentProducts, this.productObj]);
    
    alert('Producto agregado!');

    // Limpiamos el formulario
    this.productObj = {
      nam: '',
      description: '',
      price: null,
      image: ''
    };
  }
}