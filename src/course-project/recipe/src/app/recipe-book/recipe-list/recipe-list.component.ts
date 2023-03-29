import { Component,Output, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../util/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes : Recipe[] = [ ]
  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes()
  }

  onNewRecipe(){
    console.log(this.route)
    this.router.navigate(["recipes","new"])


  }

}
