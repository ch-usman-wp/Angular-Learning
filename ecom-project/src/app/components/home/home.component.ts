import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { product } from '../../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit {
  
  popularProduct: undefined | product[];
  i : number | undefined

constructor(private prodduct: ProductService){}
ngOnInit(): void{
this.prodduct.papolarProduct().subscribe((data)=>{
  this.popularProduct = data;
})
}
}
