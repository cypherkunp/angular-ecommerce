import { Recipe } from './recipe.modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipeSelected: Recipe;
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe): void {
    this.recipeSelected = recipe;
  }
}
