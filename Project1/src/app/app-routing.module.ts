import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from '../Shopping/shopping-list/shopping-list.component';
import {HomeComponent} from './core/home/home.component';


const appRoutes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'recipes', loadChildren: '../Recipe/recipe/Recipes.module#RecipesModule'},
  {path: 'shopping-list' , component: ShoppingListComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
