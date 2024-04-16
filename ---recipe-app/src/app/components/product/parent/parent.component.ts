import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.sass'
})
export class ParentComponent {

  // @Input() addedProductName : string;
  addProduct:any;
  productSelected:boolean = false;
  selProduct: any;
  proSelected: any ;
  cartProName: any;

  selectedProduct(product: string | undefined){
    this.proSelected = true;
    this.selProduct = product;
  }
  onAddedProduct(proData: any){
    this.addProduct = proData;
    console.log(proData);
  }
  cartAddedProduct(produ: string){
    this.cartProName = produ;

  }
}
