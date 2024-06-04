import { Routes } from '@angular/router';
import { ProductComponent } from './component/product/product.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { BusinessDetailsComponent } from './component/iframe/business-details/business-details.component';

export const routes: Routes = [
    {path: '', component: BusinessDetailsComponent},
    {path: 'product', component: ProductComponent},
    {path: 'product-detail', component: ProductDetailComponent},
];
