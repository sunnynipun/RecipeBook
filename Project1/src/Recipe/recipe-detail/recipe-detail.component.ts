import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe/recipe.model';
import {RecipeService} from '../recipe/recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  recipeList: Recipe[];
  constructor(private recipeService: RecipeService, private currentPath: ActivatedRoute, private route: Router) { }
  ngOnInit() {
     this.currentPath.params.subscribe((param: Params) => {
       this.id = +param['id'];
       this.recipe = this.recipeService.getRecipe(this.id);
     });
  }
  addToShoppingList() {
    console.log('calling recipe');
    this.recipeService.addAllIngredients(this.recipe.ingredients);
  }
  editRecipe() {
    this.route.navigate(['edit'], {relativeTo: this.currentPath})
  }
  deleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.route.navigate(['']);
  }
}
