import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private productService:ProductService) { }

  products:any;
  ngOnInit(): void {

     this.getProducts();
   }



   getProducts(){ 
    this.productService.getAll().subscribe((data)=>{
      this.products=data;
      console.log(data);
    });
    }


    deleteProduct(product:number){
      this.productService.delete(product).subscribe((data)=>{
        console.log(data);
        this.getProducts();

      }
      );
    }

}
