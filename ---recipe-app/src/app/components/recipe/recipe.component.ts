import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.sass'],
  providers : [RecipeService]

})
export class RecipeComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  selectedRecipe!: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.
    subscribe(
      (recipe: Recipe)=>{
        this.selectedRecipe= recipe;
      }
    );
  }

}
