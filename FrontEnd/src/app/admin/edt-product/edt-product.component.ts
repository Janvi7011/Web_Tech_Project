import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product-service.service';

@Component({
  selector: 'app-edt-product',
  templateUrl: './edt-product.component.html',
  styleUrls: ['./edt-product.component.css']
})
export class EdtProductComponent implements OnInit {

  constructor(private route:ActivatedRoute,private ProductService:ProductService,private router:Router) { }
   productid:any;
   productData:any;
  ngOnInit(): void {
  
    this.route.params.subscribe(params => {
      this.productid = params['id'];
    });   


    this.ProductService.getProduct(this.productid).subscribe((data)=>{
      this.productData=data;
      console.log(data);
    } 
    );
  }

  editProduct(){

    var product = {
      productname:this.productData[0].productname,
      priceperunit:this.productData[0].priceperunit,
      companyname:this.productData[0].companyname,
      category:this.productData[0].category,
      status:this.productData[0].status
    }

    this.ProductService.update(this.productid,product).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/admin']);
    });
    alert('Product Edited');

  }
}
