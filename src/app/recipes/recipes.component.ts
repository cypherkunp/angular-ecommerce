import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipeSelected: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => (this.recipeSelected = recipe));
  }

  onRecipeSelected(recipe): void {
    this.recipeSelected = recipe;
  }
}
