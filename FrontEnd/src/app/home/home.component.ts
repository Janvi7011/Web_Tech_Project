import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private product:ProductService, private cartService:CartService) { }
  products:any;
  categoryNames: any;
  cartProduct:any;
  ngOnInit(): void {
    this.product.getAll().subscribe((data)=>{
      this.products=data;
      console.log(data);

      this.categoryNames = [...new Set(data.map((product: any) => product.category))];
    });
  }


  addToCart(product: any) {
    this.cartProduct = localStorage.getItem('cart');

    const cartItems = JSON.parse(this.cartProduct);
    
    for(let item in cartItems){
      if(cartItems[item].productid === product.productid){
        console.log(cartItems[item].productid);
        alert('Product already added in cart');
        return;
      }
    }
    this.cartService.addToCart(product);
  }
}
