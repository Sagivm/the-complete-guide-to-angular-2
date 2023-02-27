import { Component,Output, EventEmitter, OnChanges } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes : Recipe[] = [
    new Recipe("Gulash", "Gulash","https://www.tefal.com/medias/?context=bWFzdGVyfHJvb3R8MjM1ODJ8aW1hZ2UvanBlZ3xoMDIvaGZiLzE0NTM0Njc3OTg3MzU4LmpwZ3w4MWM1ZDI1MDBhMzI4NmVmZjQ2NDQ3MDhkNTE5ODdiM2NlMzM2ZjVhZmY3ZmZjODRkNDRjYTlmYThiZTg5NjFm"),
    new Recipe("Gulash too", "Gulash too","https://www.tefal.com/medias/?context=bWFzdGVyfHJvb3R8MjM1ODJ8aW1hZ2UvanBlZ3xoMDIvaGZiLzE0NTM0Njc3OTg3MzU4LmpwZ3w4MWM1ZDI1MDBhMzI4NmVmZjQ2NDQ3MDhkNTE5ODdiM2NlMzM2ZjVhZmY3ZmZjODRkNDRjYTlmYThiZTg5NjFm"),

  ]
  @Output('selectedRecipe') selectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    console.log(recipe);
    this.selectedRecipe.emit(recipe);
  }

}
