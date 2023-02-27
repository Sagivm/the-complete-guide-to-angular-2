import { Component, Output, EventEmitter} from '@angular/core';
import { Ingredient } from 'src/app/util/ingredient.model';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {

  @Output('item') item: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  onAddItem(nameInput: HTMLInputElement,
            amountInput: HTMLInputElement): void {
              this.item.emit(new Ingredient(nameInput.value, parseInt(amountInput.value)));
    }

}
