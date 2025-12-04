import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService } from '../../services/store'; // Importamos desde 'store' (sin .service)

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',  // Apunta a cart.html
  styleUrls: ['./cart.css']    // Apunta a cart.css (si existe)
})
export class Cart {
  constructor(public storeService: StoreService) {}

  get total() {
    return this.storeService.cart().reduce((acc, item) => acc + item.precio, 0);
  }
}