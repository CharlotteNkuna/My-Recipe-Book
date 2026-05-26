import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../service/recipe-service';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-details.html',
  styleUrl: './recipe-details.css',
})
export class RecipeDetails {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private recipeService = inject(RecipeService);

  recipe: any;

  favourites: number[] = [];

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipe = this.recipeService.getRecipes().find(r => r.id === id);
  }

  goBack() {
    this.router.navigate(['/recipes']);
  }

  toggleFavourite() {
    const favs = JSON.parse(localStorage.getItem('favs') || '[]');

    if (favs.includes(this.recipe.id)) {
      const updated = favs.filter((id: number) => id !== this.recipe.id);
      localStorage.setItem('favs', JSON.stringify(updated));
    } else {
      favs.push(this.recipe.id);
      localStorage.setItem('favs', JSON.stringify(favs));
    }
  }

  isFavourite(): boolean {
    const favs = JSON.parse(localStorage.getItem('favs') || '[]');
    return favs.includes(this.recipe?.id);
  }
  
}