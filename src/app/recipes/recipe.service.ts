import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.modal';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Recipe',
      'Tender Grilled Chicken',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new Recipe(
      'Mutton Recipe',
      'Tender Grilled Mutton',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
