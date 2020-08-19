import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.modal';
import { Ingredient } from '../shared/ingredient.modal';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Recipe',
      'Tender Grilled Chicken',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [new Ingredient('Chicken', 500), new Ingredient('Onion', 2)]
    ),
    new Recipe(
      'Mutton Recipe',
      'Tender Grilled Mutton',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [new Ingredient('Mutton', 500), new Ingredient('Onion', 2)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
