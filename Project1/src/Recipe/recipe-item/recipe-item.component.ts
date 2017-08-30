import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe/recipe.model';
import {RecipeService} from '../recipe/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

 @Input() recipeItem: Recipe;
 @Input() id: number;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  recipeSelected() {
   /* this.recipeClicked.emit();
    this.recipeService.recipeSelect.emit(this.recipeItem);*/
  }
}
