import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Recipe } from './../recipe.modal';
import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.modal';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetail: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddToShoppingList() {
    this.shoppingListService.addIngredient.emit(this.recipeDetail.ingredients);
  }
}
