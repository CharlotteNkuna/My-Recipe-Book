import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Recipes } from './recipes/recipes';
import { Favourites } from './favourites/favourites';
import { RecipeDetails } from './recipe-details/recipe-details';


export const routes: Routes = [
    {path: '', component: Home},
    {path: 'about', component: About},
    {path: 'recipes', component: Recipes},
    {path: 'recipe/:id', component: RecipeDetails},
    {path: 'favourites', component: Favourites}

];
