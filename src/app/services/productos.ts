import { Injectable } from '@angular/core';

export interface Producto {
  photo: string;
  name: string;
  description: string;
  price: number;
  sport: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos: Producto[] = [
    {
      
      photo: '/recursos/Tenis.jpeg', 
      name: 'Tenis Nike Dunk.',
      description: 'Tenis Edicion Especial',
      price: 100,
      sport: ['Moda', 'Urbano']
    },
    {
      
      photo: '/recursos/PlayeraBebote.jpg', 
      name: 'Playera Santiago',
      description: 'El mejor delantero de mexico',
      price: 120,
      sport: ['Casual', 'skate']
    },
    {  
       photo: '/recursos/Copaca.jpg', 
       name: 'Copa del camello',
       description: 'Copa para el mejor camello',
       price: 120,
       sport: ['Casual', 'urbano']
     },
     {
        photo: '/recursos/Balon.jpeg', 
        name: 'Puma CA Pro Rojos',
        description: 'Copa champions 2011.',
        price: 115,
        sport: ['Casual', 'urbano']
      },
        {
      
      photo: '/recursos/Messi.jpg', 
      name: 'PLayera Messi Barcelona.',
      description: 'El mejor del mundo',
      price: 100,
      sport: ['Moda', 'Urbano']
    },

    
    
  ];

  constructor() { }

  obtenerProductos(): Producto[] {
    return this.productos;
  }
}