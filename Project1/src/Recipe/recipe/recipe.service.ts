import {Recipe} from './recipe.model';
import { Injectable} from '@angular/core';
import {Ingredient} from 'app/shared/ingredient.model';
import {ShoppingListService} from '../../Shopping/shopping-list/shoppingList.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {
 // recipeSelect = new EventEmitter<Recipe>();
  saveRecipe = new Subject();
  recipeAdded = new Subject<Recipe[]>();
  recipeList: Recipe[] = [
    new Recipe('Test Recipe Name',
               'This is test recipe Description',
               'https://i.ytimg.com/vi/63HiDpiuMFQ/maxresdefault.jpg',
               [new Ingredient('noodles', '10'), new Ingredient('peas', '15')]
      ),

    new Recipe('Test Recipe Name 1',
               'Test Recipe Description 1',
               'http://a1330.phobos.apple.com/us/r1000/051/Purple/74/c9/22/' +
               'mzl.hepsdpym.png?downloadKey=1367400177_11642091c44d1c07d6a9b3058d92f6ad',
                [new Ingredient('Chicken legs', '3'), new Ingredient('eggs', '10')])
  ];
  constructor(private slService: ShoppingListService) {}
  fetchRecipeList() {
    return this.recipeList.slice();
  }
  setRecipes(recipes: Recipe[]) {
    this.recipeList = recipes;
    this.recipeAdded.next(this.recipeList.slice());
  }

   getRecipe(id: number) {
    return this.recipeList[id];
   }
  addAllIngredients(ingredients: Ingredient[]) {
    console.log('calling shopping');
    this.slService.addAllIngredients(ingredients);
  }
  addRecipe(recipe: Recipe) {
     this.recipeList.push(recipe);
     this.recipeAdded.next(this.recipeList.slice());
  }
  updateRecipe(i: number, recipe: Recipe) {
     this.recipeList[i] = recipe;
     this.recipeAdded.next(this.recipeList.slice());
  }
  deleteRecipe(id: number) {
    this.recipeList.splice(id, 1);
    this.recipeAdded.next(this.recipeList.slice());
  }
}

