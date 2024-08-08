import { Component, OnInit } from '@angular/core';
import { get } from 'http';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems:any;
  cart = true;
  constructor() { }

  ngOnInit(): void {
    this.getAllCartItems();
  }

  getAllCartItems() {
    this.cartItems = JSON.parse(localStorage.getItem('cart') as string) ?? [];

    if(this.cartItems.length > 0) {
      this.cart = false;
    }

  }
  removeFromCart(product: any) {  
    const index = this.cartItems.findIndex((item: any) => item.productid === product.productid);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
      this.getAllCartItems();
    }
  }
  calculateTotalPrice() {
    return this.cartItems.reduce((acc: any, item: any) => acc + item.priceperunit, 0);
  }
  clearCart() {
    localStorage.removeItem('cart');
    this.getAllCartItems();
  }


}
