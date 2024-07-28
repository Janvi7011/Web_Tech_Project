import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-service.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:any;
  cartProduct:any;
  constructor(private activedrout:ActivatedRoute,private productService:ProductService,private cartService:CartService) { }

  ngOnInit(): void {
    const id = this.activedrout.snapshot.paramMap.get('id');
    console.log(id);
    this.productService.getProduct(id).subscribe((data)=>{
      this.product=data;
      console.log(this.product);
  });
}

addToCart() {
  this.cartProduct = localStorage.getItem('cart');

  const cartItems = JSON.parse(this.cartProduct);
  
  for(let item in cartItems){
    if(cartItems[item].productid === this.product[0].productid){
      console.log(cartItems[item].productid);
      alert('Product already added in cart');
      return;
    }
  }
  this.cartService.addToCart(this.product[0]);
}
}