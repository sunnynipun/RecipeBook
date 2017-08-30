import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../../Recipe/recipe/recipe.service';
import {Recipe} from '../../Recipe/recipe/recipe.model';
import 'rxjs/Rx';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {}
  storeRecipe() {
    const token = this.authService.getToken();
    return this.http.put('https://recipe-book-de369.firebaseio.com/recipes.json?auth=' + token, this.recipeService.fetchRecipeList());
  }
  fetchRecipes() {
    const token = this.authService.getToken();
    this.http.get('https://recipe-book-de369.firebaseio.com/recipes.json?auth=' + token). map((response: Response) => {
      const recipe: Recipe[] = response.json();
      for (const rec of recipe) {
        if (!rec['ingredients']) {
          rec.ingredients = [];
          console.log('added empty');
        }
      }
      return recipe;
    })
      .subscribe((recipe: Recipe[]) => {
      this.recipeService.setRecipes(recipe);
    });
  }
}
