import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from "../../util/shopping-list.service"
import { Ingredient } from 'src/app/util/ingredient.model';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  @Input("selectedRecipe") recipe:Recipe;

  constructor(private shoppingListService: ShoppingListService){
  }

  onSendToShoppingList(){
   for (let ingredient of this.recipe.ingredients){
      this.shoppingListService.addIngredient(ingredient);
   }
  alert("Ingredients were added successfully")

  }
}
