import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeList = [
    {id: 1,
      name: 'Spaghetti Carbonara',
      image: '/spaghetti.jpg',
      description: 'Classic Italian pasta with creamy egg sauce, crispy pancetta and Parmesan.',
      category: 'Dinner',
      prepTime: 10,
      cookTime: 20,
      servings: 4,
      difficulty: 'Medium',
      ingredients: [
        '400g spaghetti',
        '200g pancetta or guanciale',
        '4 large eggs',
        '100g Parmesan cheese, grated',
        '2 cloves garlic',
        'Salt and black pepper to taste',
      ],
      steps: [
        'Boil spaghetti in salted water until al dente.',
        'Fry pancetta in a pan until crispy. Add garlic.',
        'Whisk eggs with grated Parmesan in a bowl.',
        'Drain pasta, reserve some pasta water.',
        'Mix pasta with pancetta off the heat, then add egg mixture.',
        'Toss quickly, adding pasta water to achieve a creamy sauce.',
        'Season with black pepper and serve immediately.',
      ],
    },
    
    {
      id: 2,
      name: 'Avocado Toast',
      image: '/avocado.jpg',
      description: 'Simple and nutritious breakfast with creamy avocado on toasted sourdough.',
      category: 'Breakfast',
      prepTime: 5,
      cookTime: 5,
      servings: 2,
      difficulty: 'Easy',
      ingredients: [
        '2 slices sourdough bread',
        '1 ripe avocado',
        '1 lemon, juiced',
        'Red pepper flakes',
        'Salt and pepper to taste',
        '2 eggs (optional)',
      ],
      steps: [
        'Toast the sourdough slices until golden.',
        'Halve avocado, remove pit, scoop flesh into bowl.',
        'Mash avocado with lemon juice, salt and pepper.',
        'Spread avocado mixture on toast.',
        'Top with red pepper flakes.',
        'Add a poached egg on top if desired.',
      ],
    },

    {
      id: 3,
      name: 'Chicken Tikka Masala',
      image: '/chicken.jpg',
      description: 'Rich and aromatic Indian curry with tender chicken in a spiced tomato sauce.',
      category: 'Dinner',
      prepTime: 20,
      cookTime: 40,
      servings: 4,
      difficulty: 'Medium',
      ingredients: [
        '700g chicken breast, cubed',
        '400ml coconut cream',
        '400g canned tomatoes',
        '1 onion, diced',
        '3 cloves garlic',
        '2 tsp garam masala',
        '1 tsp cumin',
        '1 tsp turmeric',
        '1 tsp chili powder',
        'Fresh coriander to garnish',
      ],
      steps: [
        'Marinate chicken in yoghurt and spices for 30 minutes.',
        'Grill or pan-fry chicken until slightly charred.',
        'Sauté onion and garlic in oil until soft.',
        'Add spices and cook for 1 minute until fragrant.',
        'Add tomatoes and simmer for 10 minutes.',
        'Add coconut cream and chicken, simmer for 20 minutes.',
        'Garnish with coriander and serve with rice or naan.',
      ],
    },

    {
      id: 4,
      name: 'Greek Salad',
      image: '/greek.jpg',
      description: 'Fresh Mediterranean salad with crisp vegetables, olives and feta cheese.',
      category: 'Lunch',
      prepTime: 15,
      cookTime: 0,
      servings: 2,
      difficulty: 'Easy',
      ingredients: [
        '2 large tomatoes, chopped',
        '1 cucumber, sliced',
        '1 red onion, thinly sliced',
        '100g Kalamata olives',
        '150g feta cheese',
        '3 tbsp olive oil',
        '1 tbsp red wine vinegar',
        'Dried oregano',
      ],
      steps: [
        'Chop tomatoes and cucumber into chunks.',
        'Thinly slice red onion.',
        'Combine all vegetables in a large bowl.',
        'Add olives and crumble feta on top.',
        'Drizzle with olive oil and red wine vinegar.',
        'Season with oregano, salt and pepper.',
        'Toss gently and serve immediately.',
      ],
    },

    {
      id: 5,
      name: 'Chocolate Lava Cake',
      image: '/chocolate.jpg',
      description: 'Decadent warm chocolate cake with a gooey molten centre.',
      category: 'Dessert',
      prepTime: 15,
      cookTime: 12,
      servings: 4,
      difficulty: 'Hard',
      ingredients: [
        '200g dark chocolate',
        '100g butter',
        '4 eggs',
        '4 egg yolks',
        '100g caster sugar',
        '2 tbsp plain flour',
        'Butter and cocoa powder for ramekins',
      ],
      steps: [
        'Preheat oven to 200°C. Grease 4 ramekins with butter and dust with cocoa.',
        'Melt chocolate and butter together in a double boiler.',
        'Whisk eggs, yolks and sugar until pale and thick.',
        'Fold melted chocolate into egg mixture.',
        'Sift in flour and fold gently.',
        'Divide batter into ramekins.',
        'Bake for 10-12 minutes until edges are set but centre jiggles.',
        'Turn out onto plates and serve immediately with cream or ice cream.',
      ],
    },

    {
      id: 6,
      name: 'Banana Smoothie Bowl',
      image: '/banana.jpg',
      description: 'Thick and creamy smoothie bowl topped with fresh fruit and granola.',
      category: 'Breakfast',
      prepTime: 10,
      cookTime: 0,
      servings: 1,
      difficulty: 'Easy',
      ingredients: [
        '2 frozen bananas',
        '100ml almond milk',
        '1 tbsp peanut butter',
        'Granola for topping',
        'Fresh berries',
        'Honey to drizzle',
        'Chia seeds',
      ],
      steps: [
        'Blend frozen bananas with almond milk until thick and creamy.',
        'Add peanut butter and blend briefly.',
        'Pour into a bowl — it should be thicker than a smoothie.',
        'Top with granola, fresh berries, and chia seeds.',
        'Drizzle with honey and serve immediately.',
      ]
    }
  ]

  getRecipes() {
    return this.recipeList
  }

  getFavourites() {
    const favIds = JSON.parse(localStorage.getItem('favs') || '[]');
    return this.recipeList.filter(r => favIds.includes(r.id));
  }

}
