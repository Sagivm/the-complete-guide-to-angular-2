import { EventEmitter } from '@angular/core';
import { Recipe } from "../recipe-book/recipe.model";
import { Ingredient } from './ingredient.model';

export class RecipeService{

    recipeSelected :EventEmitter<Recipe>= new EventEmitter<Recipe>();

    recipes : Recipe[] = [
        new Recipe(
            "Gulash",
            "Gulash",
            "https://www.tefal.com/medias/?context=bWFzdGVyfHJvb3R8MjM1ODJ8aW1hZ2UvanBlZ3xoMDIvaGZiLzE0NTM0Njc3OTg3MzU4LmpwZ3w4MWM1ZDI1MDBhMzI4NmVmZjQ2NDQ3MDhkNTE5ODdiM2NlMzM2ZjVhZmY3ZmZjODRkNDRjYTlmYThiZTg5NjFm",
            [new Ingredient("Meat",2), new Ingredient("Potato",2)]),
        new Recipe(
            "Gulash too", 
            "Gulash too",
            "https://www.tefal.com/medias/?context=bWFzdGVyfHJvb3R8MjM1ODJ8aW1hZ2UvanBlZ3xoMDIvaGZiLzE0NTM0Njc3OTg3MzU4LmpwZ3w4MWM1ZDI1MDBhMzI4NmVmZjQ2NDQ3MDhkNTE5ODdiM2NlMzM2ZjVhZmY3ZmZjODRkNDRjYTlmYThiZTg5NjFm",
            [new Ingredient("Man Meat", 4), new Ingredient("Tomato", 4)])
    
    ]

    constructor(){}
    
    getRecipes(){
        return this.recipes.slice()
    }
    
    getRecipe(name: string): Recipe{
        const recipe = this.recipes.find(
          (r) => {
            return r.name == name;
          }
        );
        return recipe
      }


}