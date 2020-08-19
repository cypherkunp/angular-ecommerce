import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {
    this.shoppingListService.addIngredient.subscribe((ingredient: Ingredient) =>
      this.ingredients.push(ingredient)
    );
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getShoppingList();
  }
}
