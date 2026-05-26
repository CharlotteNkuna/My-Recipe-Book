/* import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../service/recipe-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favourites.html',
  styleUrl: './favourites.css',
})
export class Favourites {

  private recipeService = inject(RecipeService);
  private router = inject(Router);

  favourites = this.recipeService.getFavourites();

  openRecipe(id: number) {
    this.router.navigate(['/recipe', id]);
  }
  
} */


  import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../service/recipe-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favourites.html',
  styleUrl: './favourites.css',
})
export class Favourites {

  private recipeService = inject(RecipeService);
  private router = inject(Router);

  // ✅ FIX: always get fresh list
  get favourites() {
    return this.recipeService.getFavourites();
  }

  ratings: { [key: number]: number } = {};

  ngOnInit() {
    const saved = localStorage.getItem('ratings');
    if (saved) {
      this.ratings = JSON.parse(saved);
    }
  }

  openRecipe(id: number) {
    this.router.navigate(['/recipe', id]);
  }

  rate(recipeId: number, stars: number) {
    this.ratings[recipeId] = stars;
    localStorage.setItem('ratings', JSON.stringify(this.ratings));
  }
}