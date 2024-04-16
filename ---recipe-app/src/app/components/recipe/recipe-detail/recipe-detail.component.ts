import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.sass'] // Use styleUrls instead of styleUrl
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe!: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  
  }
}
