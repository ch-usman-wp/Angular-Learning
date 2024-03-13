import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../recipe/shared/ingredient.model';
import { ShoppingListServices } from '../../services/shopping-list.services';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.sass',

})
export class ShoppingListComponent implements OnInit{
ingredients!: Ingredient[] ;

constructor(private slservices: ShoppingListServices){}

ngOnInit(){
this.ingredients = this.slservices.getIngredients();
this.slservices.ingredientChanged.subscribe(
  (ingredients: Ingredient[])=>{
    this.ingredients = ingredients;
  }
);


}
}


