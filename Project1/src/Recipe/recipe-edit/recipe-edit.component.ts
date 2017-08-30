import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../recipe/recipe.service';
import {Recipe} from '../recipe/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
    form: FormGroup;
    id: number;
    editMode= false;
  constructor(private currentPath: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.currentPath.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.editMode = param['id'] != null;
      console.log(this.editMode);
      this.init();
    });
  }
   private init() {
    let name = '';
    let imageUrl = '';
    let desc = '';
    let ingrediantsList = new FormArray([]);
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      name = recipe.name;
      desc = recipe.description;
      imageUrl = recipe.imgPath;
      if (recipe['ingredients']) {
        for (let ingr of recipe.ingredients) {
            ingrediantsList.push(new FormGroup({
            name: new FormControl(ingr.name , Validators.required),
            amount: new FormControl(ingr.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
    }
    this.form = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'imageUrl': new FormControl(imageUrl, Validators.required),
      'description': new FormControl(desc, Validators.required),
      'ingredients': ingrediantsList
    });
   }
   addIngre() {
     (<FormArray>this.form.get('ingredients')).push(new FormGroup({
       name: new FormControl(),
       amount: new FormControl()
     }))
   }
   removeIngredient(i: number) {
     (<FormArray>this.form.get('ingredients')).removeAt(i);
   }
   addRecipe() {
     const recipe = new Recipe(this.form.value['name'],
       this.form.value['description'],
       this.form.value['imageUrl'],
       this.form.value['ingredients']);
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, recipe);
    }else {
      this.recipeService.addRecipe(recipe);
    }
     this.router.navigate(['..'], {relativeTo: this.currentPath});
   }
   onCancel() {
    this.router.navigate(['/recipes']);
   }
   }
