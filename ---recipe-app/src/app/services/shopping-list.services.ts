import { EventEmitter } from "@angular/core";
import { Ingredient } from "../components/recipe/shared/ingredient.model";

export class ShoppingListServices {
    ingredientChanged = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient('apple', 5),
        new Ingredient('orange', 6),
      ];

    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());

    }
    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //   this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
        console.log(ingredients);
      }
    }