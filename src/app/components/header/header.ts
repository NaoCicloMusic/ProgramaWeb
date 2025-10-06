import { Component } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgForOf, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
public headerOptions: string[]=['lo Nuevo','Hombre'];
public headerIcons: string[]=['<i class="bi bi-bag-heart-fill"></i>'];
aritclObj={
  name: '',
  description: '',
  classification:'',
  price:'',

}
aticlelist : any=[];//
}
