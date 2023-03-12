import { Component, Output, EventEmitter} from '@angular/core';
import { Ingredient } from 'src/app/util/ingredient.model';
import { ShoppingListService } from 'src/app/util/shopping-list.service';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {

  // item: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  
  constructor(private shoppingListService: ShoppingListService){}

  onAddItem(nameInput: HTMLInputElement,
            amountInput: HTMLInputElement): void {
              this.shoppingListService.addIngredient(
                new Ingredient(nameInput.value, parseInt(amountInput.value)));
    }

}
