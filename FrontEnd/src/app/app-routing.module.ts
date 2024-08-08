import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { EdtProductComponent } from './admin/edt-product/edt-product.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"cart", component: ShoppingCartComponent},
  {path:"product/:id", component: ProductDetailComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'order',component:OrderComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'editProduct/:id',component:EdtProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
