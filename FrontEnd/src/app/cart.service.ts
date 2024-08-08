import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  items: any = [];
   

  addToCart(product: any) {
    this.items.push(product);
    localStorage.setItem('cart', JSON.stringify(this.items));
    alert('Product added in cart');
  }

  
}
