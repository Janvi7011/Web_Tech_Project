import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private router:Router) { }
  loginForm:any;  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      uname:'',
      password:''
    });
  }

  login(){
   if(this.loginForm.value.uname === 'admin' && this.loginForm.value.password === 'admin'){
     alert('Login Success');
     this.router.navigate(['/admin']);
   }
  }

}
