import { Component, OnInit } from '@angular/core';

import { ProductService } from './product-service.service';
import { CartService } from './cart.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FurnitureECom';
 
  constructor() { }

}


