import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../../app/shared/ingredient.model';
import {ShoppingListService} from './shoppingList.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {
   ingredients: Ingredient[];
   addItemSubscr: Subscription;
  constructor(private shoppingService: ShoppingListService ) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.fetchIngredients();
    this.addItemSubscr = this.shoppingService.itemAdded.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }
  onItemEdit(index: number) {
    this.shoppingService.itemEdit.next(index);
  }
  ngOnDestroy(): void {
    this.addItemSubscr.unsubscribe();
  }

}
