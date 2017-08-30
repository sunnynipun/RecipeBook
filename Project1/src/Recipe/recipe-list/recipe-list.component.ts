import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../recipe/recipe.model';
import {RecipeService} from '../recipe/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipeList: Recipe[];
  subscription = new Subscription();
  constructor(private recipeService: RecipeService, private router: Router, private currentPath: ActivatedRoute) {}
  ngOnInit() {
    this.recipeList = this.recipeService.fetchRecipeList();
    this.subscription = this.recipeService.recipeAdded.subscribe((recipeLst: Recipe[]) => {
      this.recipeList = recipeLst;
    });
  }
  newRecipe() {
    this.router.navigate(['new'], {relativeTo: this.currentPath});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
