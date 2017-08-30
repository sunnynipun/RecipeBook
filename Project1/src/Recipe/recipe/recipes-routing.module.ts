import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../app/auth/auth-guard.service';
import {RecipeEditComponent} from '../recipe-edit/recipe-edit.component';
import {RecipeDetailComponent} from '../recipe-detail/recipe-detail.component';
import {SelectRecipeComponent} from '../select-recipe/select-recipe.component';
import {RecipeComponent} from './recipe.component';

const recipeRoutes: Routes =[
  {path: '' , component: RecipeComponent,
    children: [
      {path: '', component: SelectRecipeComponent},
      {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService]},
      {path: ':id', component: RecipeDetailComponent },
      {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService]}]}
];
@NgModule({
  imports: [RouterModule.forChild(recipeRoutes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class RecipesRoutingModule {}
