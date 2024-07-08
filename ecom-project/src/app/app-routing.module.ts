import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SellerAuthComponent } from './components/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { AuthGuard } from './guard/auth.guard';
import { SellerAddProductComponent } from './components/seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './components/seller-update-product/seller-update-product.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'seller-auth', component:SellerAuthComponent},
  {path:'seller-home', component:SellerHomeComponent, canActivate:[AuthGuard]},
  {path:'seller-add-product', component:SellerAddProductComponent, canActivate:[AuthGuard]},
  {path:'seller-update-product/:id', component:SellerUpdateProductComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
