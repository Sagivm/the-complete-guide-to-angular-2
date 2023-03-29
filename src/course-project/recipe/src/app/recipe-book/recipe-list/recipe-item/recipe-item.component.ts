import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../util/recipe.service'
import { Route,Router } from '@angular/router';
@Component({

  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent{

  @Input('recipe') recipe: Recipe; 
  constructor(private recipeService: RecipeService,
    private router: Router){}
  
  onRecipeItemClick()
  {
    this.router.navigate([this.recipe.name]) 
  }
}

