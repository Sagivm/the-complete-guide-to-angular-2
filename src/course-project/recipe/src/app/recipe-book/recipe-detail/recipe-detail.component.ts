import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from "../../util/shopping-list.service"
import { RecipeService } from '../../util/recipe.service';
import { Ingredient } from 'src/app/util/ingredient.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input("selectedRecipe") recipe:Recipe;

  constructor(private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute){
  }

  ngOnInit(){
    this.recipe = this.recipeService.getRecipe(
      this.route.snapshot.params["name"]
    )
    this.route.params.subscribe((params)=>{
      this.recipe = this.recipeService.getRecipe(params["name"])
    })
  }

  onSendToShoppingList(){
   for (let ingredient of this.recipe.ingredients){
      this.shoppingListService.addIngredient(ingredient);
   }
  alert("Ingredients were added successfully")

  }
}
