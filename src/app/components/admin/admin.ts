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
    image: ''
  };

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
    this.localProductList.push({ ...this.productObj });
    this.authService.productList.update(currentProducts => [...currentProducts, this.productObj]);
    alert('Producto agregado!');
    this.productObj = {
      nam: '',
      description: '',
      price: null,
      image: ''
    };
  }
}