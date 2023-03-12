import { EventEmitter } from "@angular/core";
import { Ingredient } from "./ingredient.model";

export class ShoppingListService{

    newIngredients: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient('tomato', 2),
        new Ingredient('cucumber', 1),
        new Ingredient('onion', 1),
        new Ingredient('pepper', 1),
        new Ingredient('mushroom', 1)
      ];
    
      getIngredients(){
        return this.ingredients.slice();
      }

      addIngredient(Ingredient:Ingredient){

        this.ingredients.push(Ingredient);
        this.newIngredients.emit(this.ingredients.slice())
      }
}