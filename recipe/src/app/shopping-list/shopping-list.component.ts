import { Component } from '@angular/core';
import { Ingredient } from '../util/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('tomato', 2),
    new Ingredient('cucumber', 1),
    new Ingredient('onion', 1),
    new Ingredient('pepper', 1),
    new Ingredient('mushroom', 1)
  ];

  constructor(){}
}
