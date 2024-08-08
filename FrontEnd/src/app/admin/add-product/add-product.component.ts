import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private productService:ProductService,private router:Router) { }

  addProductForm!:FormGroup;
  ngOnInit(): void {

    this.addProductForm = this.formBuilder.group({
      id:'',
      name:'',
      cname:'',
      ppu:'',
      category:'',
      image:'',
      status:''
    });
  }


  addProduct(){
    if(this.addProductForm.value.name === '' || this.addProductForm.value.priceperunit === '' || this.addProductForm.value.quantity === '' || this.addProductForm.value.description === ''){
      alert('Please fill all the fields');
      return;
    }


    var product = {
      productid:this.addProductForm.value.id,
      productname:this.addProductForm.value.name,
      priceperunit:this.addProductForm.value.ppu,
      companyname:this.addProductForm.value.cname,
      image:this.addProductForm.value.image,
      category:this.addProductForm.value.category,
      status:this.addProductForm.value.status
    }


    this.productService.create(product).subscribe((data)=>{
      console.log(data);
      alert('Product added successfully');
      this.router.navigate(['/admin']);
    });
    console.log(this.addProductForm.value);
  }
}
