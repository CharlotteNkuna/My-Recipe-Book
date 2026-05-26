// import { Component, inject } from '@angular/core';
// import { RecipeService } from '../service/recipe-service';
// import { NgFor } from '@angular/common';
// import { FormsModule } from '@angular/forms';



// @Component({
//   selector: 'app-recipes',
//   imports: [NgFor, FormsModule],
//   templateUrl: './recipes.html',
//   styleUrl: './recipes.css',
// })
// export class Recipes {
//   recipe = inject(RecipeService)
//   recipeList = this.recipe.getRecipes();

//   searchText: string = '';

//   filteredRecipes() {
//     return this.recipeList.filter(recipe =>
//       recipe.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
//       recipe.category.toLowerCase().includes(this.searchText.toLowerCase())
//     );
//   }

//   viewDetails(recipe: any) {
//     console.log('Clicked:', recipe);
//   }
// }


import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from '../service/recipe-service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes {

  private recipeService = inject(RecipeService);
  private router = inject(Router);

  recipeList = this.recipeService.getRecipes();

  searchText: string = '';

  filteredList() {
    return this.recipeList.filter(recipe => {
  
      const matchesSearch =
        recipe.name.toLowerCase().includes(this.searchText.toLowerCase());
  
      const matchesCategory =
        this.selectedCategory === 'All' ||
        recipe.category === this.selectedCategory;
  
      return matchesSearch && matchesCategory;
    });
  }

  topRecipes() {
    return this.filteredList().slice(0, 3);
  }

  bottomRecipes() {
    return this.filteredList().slice(3, 6);
  }

  // ROUTING ONLY (NO selectedRecipe)
  viewDetails(recipe: any) {
    this.router.navigate(['/recipe', recipe.id]);
  }

  getFavouritesList() {
    return this.recipeService.getFavourites();
  }

  selectedCategory: string = 'All';

setCategory(cat: string) {
  this.selectedCategory = cat;
}
}