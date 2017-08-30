import {Ingredient} from '../../app/shared/ingredient.model';
import {Subject} from 'rxjs/Subject';


export class ShoppingListService {
  itemAdded = new Subject<Ingredient[]>();
  itemEdit = new Subject<number>();
  ingredients = [
    new Ingredient('Eggs', '10'), new Ingredient ('Bread Loaf', '2')
  ];
  fetchIngredients() {
    return this.ingredients.slice();
  }
  addItem(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.itemAdded.next(this.ingredients.slice());
  }
  fetchIngredient(i: number) {
    return this.ingredients[i];
  }
  updateItem(i: number, ing: Ingredient) {
    this.ingredients[i] = ing;
    this.itemAdded.next(this.ingredients.slice());
  }
  deleteItem(i: number) {
    this.ingredients.splice(i, 1);
    this.itemAdded.next(this.ingredients.slice());
  }
  addAllIngredients(ingredientsList: Ingredient[]) {
    /*for (let Ingre of ingredientsList) {
      console.log(Ingre.name + ' ' + Ingre.amount);
    }*/
    this.ingredients.push(...ingredientsList);
   console.log('added ingre');
   this.itemAdded.next(this.ingredients.slice());
   console.log('emitted ingre');
  }
}
