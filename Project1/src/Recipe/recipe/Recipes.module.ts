import {NgModule} from '@angular/core';
import {RecipeComponent} from './recipe.component';
import {RecipeDetailComponent} from '../recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from '../recipe-item/recipe-item.component';
import {RecipeListComponent} from '../recipe-list/recipe-list.component';
import {RecipeEditComponent} from '../recipe-edit/recipe-edit.component';
import {SelectRecipeComponent} from '../select-recipe/select-recipe.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RecipesRoutingModule} from './recipes-routing.module';
import {SharedModule} from '../../app/shared/shared.module';

@NgModule({
declarations: [
  RecipeListComponent,
  RecipeItemComponent,
  RecipeDetailComponent,
  RecipeComponent,
  SelectRecipeComponent,
  RecipeEditComponent,
],
  imports: [CommonModule, ReactiveFormsModule, RecipesRoutingModule, SharedModule]
})
export class RecipesModule {}
