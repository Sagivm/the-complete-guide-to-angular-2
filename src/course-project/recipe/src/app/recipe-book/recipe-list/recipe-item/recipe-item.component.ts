import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../util/recipe.service'
@Component({

  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent{

  @Input('recipe') recipe: Recipe;
  @Output('selectedRecipe') selectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  
  constructor(private recipeService: RecipeService){}
  
  onRecipeItemClick(){
    this.recipeService.recipeSelected.emit(this.recipe)
    // this.selectedRecipe.emit(this.recipe);
  }
}

