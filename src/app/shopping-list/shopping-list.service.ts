import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from './../shared/ingredient.modal';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  addIngredient = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)];

  constructor() {
    this.addIngredient.subscribe((ingredients: Ingredient[]) =>
      this.ingredients.push(...ingredients)
    );
  }

  getShoppingList() {
    return this.ingredients.slice();
  }
}
