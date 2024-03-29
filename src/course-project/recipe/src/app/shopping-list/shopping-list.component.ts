import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../util/ingredient.model';
import { ShoppingListService } from '../util/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'] 
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = []

  constructor(private shoppingListService: ShoppingListService ){}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients()
    this.shoppingListService.newIngredients.subscribe( (ingredients: Ingredient[]) => {
      this.ingredients =  ingredients
    })
  }
}
