import { Injectable, signal } from '@angular/core';
import { Producto } from '../models/ts.models';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  // Señales para carrito y favoritos
  public cart = signal<Producto[]>([]);
  public favorites = signal<Producto[]>([]);

  constructor() { }

  // --- CARRITO ---
  addToCart(product: Producto) {
    this.cart.update(current => [...current, product]);
    alert('Producto agregado al carrito');
  }

  removeFromCart(index: number) {
    this.cart.update(items => items.filter((_, i) => i !== index));
  }

  // --- FAVORITOS ---
  addToFavorites(product: Producto) {
    const exists = this.favorites().some(p => p.nombre === product.nombre);
    if (!exists) {
      this.favorites.update(current => [...current, product]);
      alert('Producto agregado a favoritos');
    } else {
      alert('Ya está en favoritos');
    }
  }

  removeFromFavorites(index: number) {
    this.favorites.update(items => items.filter((_, i) => i !== index));
  }
}