import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../recipe/shared/ingredient.model';
import { ShoppingListServices } from '../../services/shopping-list.services';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.sass'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef:ElementRef | undefined;
  @ViewChild('amountInput') amountInputRef:ElementRef | undefined;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  // ingredientAdded = new EventEmitter<{name: string, amount: number}>();
  constructor(private slServices: ShoppingListServices){}


  onAddItem(){
    const ingName = this.nameInputRef?.nativeElement.value;
    const ingAmount = this.amountInputRef?.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slServices.addIngredient(newIngredient);

    // this.ingredientAdded.emit(newIngredient);
  
  }
}
