import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { product } from '../../data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.sass'
})
export class SellerAddProductComponent {

  constructor(private product: ProductService){}
addProductMessage: string | undefined;
  addProducts(data:product) {
  this.product.addProduct(data).subscribe((val) => {
    if (val) {
      this.addProductMessage = "Product is successfully added"
    }
    setTimeout(()=> (this.addProductMessage = undefined),3000)
  });
}
}
