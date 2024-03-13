import { Component, OnInit} from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.sass'
})
export class RecipeListComponent implements OnInit {
  recipes! : Recipe[];
  
  constructor(private recipeServices: RecipeService){}
  
  ngOnInit(): void {
    this.recipes = this.recipeServices.getRecipes();

  }

}