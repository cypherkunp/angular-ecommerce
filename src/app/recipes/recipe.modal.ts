import { Ingredient } from './../shared/ingredient.modal';

export class Recipe {
  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public ingredients: Ingredient[]
  ) {}
}
