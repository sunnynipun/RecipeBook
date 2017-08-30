import {Ingredient} from '../../app/shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imgPath: string;
  public ingredients: Ingredient[];
  constructor(name: string, desc: string, imPath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imgPath = imPath;
    this.ingredients = ingredients;
  }

}
