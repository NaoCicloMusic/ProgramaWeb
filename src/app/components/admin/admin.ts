import { Component, OnInit } from '@angular/core'; // 1. Importa OnInit
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
export class Admin implements OnInit { 
  productObj = {
    nam: '',
    description: '',
    price: null,
    image: ''
  };

  localProductList: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {

    this.localProductList = this.authService.productList();
  }

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
 
    const updatedList = [...this.localProductList, this.productObj];
    
    this.authService.saveProductsToStorage(updatedList);

    this.authService.productList.set(updatedList);

    this.localProductList = updatedList;
    
    alert('Producto agregado!');

    this.productObj = {
      nam: '',
      description: '',
      price: null,
      image: ''
    };
  }
}
