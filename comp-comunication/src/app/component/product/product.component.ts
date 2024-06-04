import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  selected:boolean = false;
  selectedProduct!:'';
  CartProduct:any;

  constructor(public product:ProductService){}
  onSelect(productTitle: any){
    this.selected = true;
    this.selectedProduct = productTitle;
  }
  onAddProduct(){
    this.CartProduct = this.selectedProduct;
  }

  ngOnInit(): void {
    
  }
}
