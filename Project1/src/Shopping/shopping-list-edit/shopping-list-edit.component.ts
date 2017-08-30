import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../app/shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shoppingList.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  // @Output() onAddClicked= new EventEmitter<Ingredient> ();
   @ViewChild('f') f: NgForm;
   itemEditSubscription: Subscription;
   editMode = false;
   editItemIndex: number;
   editIngredient: Ingredient;
   constructor(private shoppingService: ShoppingListService) {}
  onSubmit(form: NgForm) {
    const values = form.value;
    const ingredient = new Ingredient(values.itemName, values.amount);
    // this.onAddClicked.emit(ingredient);
    if (this.editMode) {
      this.shoppingService.updateItem(this.editItemIndex, ingredient);
    }else {
      this.shoppingService.addItem(ingredient);
    }
    this.f.reset();
    this.editMode = false;
  }
  onDelete() {
     this.onClear();
     this.shoppingService.deleteItem(this.editItemIndex);
  }
  onClear() {
     this.f.reset();
     this.editMode = false;
  }
  ngOnInit() {
     this.itemEditSubscription = this.shoppingService.itemEdit.
     subscribe((index: number) => {
       this.editItemIndex = index;
       this.editMode = true;
       this.editIngredient = this.shoppingService.fetchIngredient(this.editItemIndex);
       this.f.setValue({
         itemName: this.editIngredient.name,
         amount: this.editIngredient.amount
       })
     });
  }
  ngOnDestroy() {
     this.itemEditSubscription.unsubscribe();
  }

}
