import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { product } from '../../data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrl: './seller-update-product.component.sass'
})
export class SellerUpdateProductComponent {

  productData: undefined | product;
  addProductMessage: undefined | string;
constructor(private route: ActivatedRoute, private product: ProductService){}

ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    productId && this.product.getProduct(productId).subscribe((data)=>{
    this.productData = data;
    })
  }
updatedProduct(data: product) {
  if (this.productData) {
    data.id=this.productData.id;
    
  }
  this.product.updateProduct(data).subscribe((val) =>{
    if(val){
      this.addProductMessage = "Updated Product";
    }
  })

  setTimeout(()=>{
    this.addProductMessage = undefined
  },2000)
}
}
