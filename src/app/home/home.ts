import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { RecipeService } from '../service/recipe-service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private recipeService = inject(RecipeService);

  recipeList = this.recipeService.getRecipes();
}
