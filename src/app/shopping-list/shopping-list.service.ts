import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from './../shared/ingredient.modal';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  addIngredient = new EventEmitter<Ingredient>();

  private ingredients: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)];

  constructor() {}

  getShoppingList() {
    return this.ingredients.slice();
  }
}
