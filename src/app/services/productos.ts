// src/app/services/productos.ts
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
      // 👇 AJUSTA EL NOMBRE Y EXTENSIÓN REAL
      photo: '/recursos/Tenis.jpeg', // ¿Es .jpeg, .jpg, .png?
      name: 'Tenis Nike Dunk.',
      description: 'Un pollo con estilo y tenis Nike Dunk.',
      price: 100,
      sport: ['Moda', 'Urbano']
    },
    {
      // 👇 AJUSTA EL NOMBRE Y EXTENSIÓN REAL
      photo: '/recursos/PlayeraBebote.jpg', // ¿Es .JPG o .jpg?
      name: 'Playera Santiago',
      description: 'El mejor delantero de mexico',
      price: 120,
      sport: ['Casual', 'skate']
    },
    {
       // 👇 AJUSTA EL NOMBRE Y EXTENSIÓN REAL
       // OJO: El archivo se llama "Copa del Mundo", no "teni.4.jfif.jpg"
       photo: '/recursos/Copaca.jpg', // ¿Es .jpg, .png? ¡Cuidado con el espacio!
       name: 'Copa del camello',
       description: 'Copa para el mejor camello',
       price: 120,
       sport: ['Casual', 'urbano']
     },
     {
        // 👇 AJUSTA EL NOMBRE Y EXTENSIÓN REAL (Este parece no estar en tu captura)
        photo: '/recursos/Balon.jpeg', // ¿Existe este archivo con esta extensión?
        name: 'Puma CA Pro Rojos',
        description: 'Tenis casuales blancos con detalles rojos.',
        price: 115,
        sport: ['Casual', 'urbano']
      },
     // ... Asegúrate que TODOS los productos tengan la ruta y extensión correctas ...
  ];

  constructor() { }

  obtenerProductos(): Producto[] {
    return this.productos;
  }
}