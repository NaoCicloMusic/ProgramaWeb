import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated = signal<boolean>(false);
  public userRole = signal<string>('');

  // 1. Clave para guardar en LocalStorage
  private readonly productsStorageKey = 'my-app-products';

  // 2. La señal ahora se inicializa con los datos de LocalStorage
  public productList = signal<any[]>(this.loadProductsFromStorage());

  constructor(private router: Router) { }

  // 3. NUEVO: Función para cargar los productos desde LocalStorage
  private loadProductsFromStorage(): any[] {
    const productsJson = localStorage.getItem(this.productsStorageKey);
    return productsJson ? JSON.parse(productsJson) : [];
  }

  // 4. NUEVO: Función para guardar los productos en LocalStorage
  public saveProductsToStorage(products: any[]) {
    localStorage.setItem(this.productsStorageKey, JSON.stringify(products));
  }

  login(role: string) {
    this.isAuthenticated.set(true);
    this.userRole.set(role);
    if (role === 'administrador') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/home']);
    }
  }

  logout() {
    this.isAuthenticated.set(false);
    this.userRole.set('');
    this.router.navigate(['/login']);
  }
}