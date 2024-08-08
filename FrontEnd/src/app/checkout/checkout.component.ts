import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private formGroup:FormBuilder,private router:Router) { }
  checkoutForm!:FormGroup;
  ngOnInit(): void {
    this.checkoutForm = this.formGroup.group({
      name:'',
      email:'',
      phone:'',
      street:'',
      city:'',
      province:''
    });
  }


  checkout(){
    if(this.checkoutForm.value.name === '' || this.checkoutForm.value.email === '' || this.checkoutForm.value.phone === '' || this.checkoutForm.value.street === '' || this.checkoutForm.value.city === '' || this.checkoutForm.value.province === ''){
      alert('Please fill all the fields');
      return;
    }
    console.log(this.checkoutForm.value);
    localStorage.setItem('userDetails', JSON.stringify(this.checkoutForm.value));
    this.router.navigate(['/order']);
  }

}
