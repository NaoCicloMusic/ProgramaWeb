import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService } from '../../services/store'; // Importamos desde 'store'

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.html',
  styleUrls: ['./favorites.css']   // Apunta a favorite.css
})
export class Favorites { // El nombre de la clase puede ser Favorites
  constructor(public storeService: StoreService) {}
}