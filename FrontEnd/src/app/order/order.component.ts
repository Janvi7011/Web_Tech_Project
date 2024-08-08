import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }
  orderDetails:any;
  products:any;
  total = 0;
  ngOnInit(): void {
  this.orderDetails = JSON.parse(localStorage.getItem('userDetails') ?? '');

   const cartItemsString = localStorage.getItem('cart');
    this.products = cartItemsString ? JSON.parse(cartItemsString) : null;

    console.log(this.products); 

    this.getTotal();

    this.clearCart();
  }

  getTotal(){
    
    this.products.forEach((item:any) => {
      this.total += item.priceperunit;
    });
    return this.total;
  }

  clearCart() {
    localStorage.removeItem('cart');
    localStorage.removeItem('userDetails');
    this.products = null;
  }


  
}
