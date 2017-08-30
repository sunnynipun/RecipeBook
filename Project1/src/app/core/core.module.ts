import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {DataStorageService} from '../shared/dataStorage.service';
import {AuthService} from '../auth/auth.service';
import {RecipeService} from '../../Recipe/recipe/recipe.service';
import {ShoppingListService} from '../../Shopping/shopping-list/shoppingList.service';

@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [SharedModule, AppRoutingModule],
  exports: [AppRoutingModule, HeaderComponent],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService]
})
export class CoreModule { }
