import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from './../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit(): void {}
  onSelect(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }
}
