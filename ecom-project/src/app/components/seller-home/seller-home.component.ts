import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { product } from '../../data-type';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.sass'
})
export class SellerHomeComponent implements OnInit {
  productList:undefined | product[]; 
  productMessage: undefined | string ;
  icon = faTrash
  EditIcon=faEdit
constructor(private product: ProductService){}
  ngOnInit(): void {
   this.product.productList().subscribe((val) =>{
    this.productList = val;
   })
  }
  deleteProduct(id:number){
    this.product.deleteProduct(id).subscribe((result) =>{
      if(result) {
        this.productMessage="Product is deleted";
        this.productList = this.productList?.filter(product => product.id !== id);
      }
    })
    setTimeout(() => {
      this.productMessage = undefined
    },3000)
  }
}
