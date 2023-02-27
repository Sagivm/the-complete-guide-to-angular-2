import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent{

  @Input('recipe') recipe: Recipe;
  @Output('selectedRecipe') selectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  
  
  onRecipeItemClick(){
    console.log(this.recipe)
    this.selectedRecipe.emit(this.recipe);
  }
}

