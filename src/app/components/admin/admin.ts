import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class Admin { // Se queda como 'Admin'
  productObj = {
    description: '',
    nam: '',
    price: ''
  };

  onsaveRecord() {
    console.log('Producto guardado:', this.productObj);
    this.productObj = { description: '', nam: '', price: '' };
  }
}