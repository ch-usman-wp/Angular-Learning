import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.sass'
})
export class ChildComponent {

  @Input() productSelected:boolean = false;
  @Input() productName:string | undefined;

  @Output() addedProduct = new EventEmitter<any>();
  @Input() selectedProduct:string | undefined;

  selProduct: string | undefined;
  proSelected: any ;

  @Output() addedProductName = new EventEmitter<string>();
  

  onAddProduct(){
    this.addedProduct.emit(this.productSelected);
    
  }
  addCart(){
    this.addedProductName.emit(this.productName);
  //  console.log(this.productName)
  }
}
