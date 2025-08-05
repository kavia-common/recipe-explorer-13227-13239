// Mock data for the Recipe Explorer application

export const mockRecipes = [
  {
    id: 1,
    title: "Mediterranean Quinoa Bowl",
    description: "A healthy and flavorful quinoa bowl packed with Mediterranean ingredients and a tangy lemon dressing.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop",
    category: "Healthy",
    cookTime: 25,
    difficulty: "Easy",
    servings: 4,
    ingredients: [
      "1 cup quinoa",
      "2 cups vegetable broth",
      "1 cucumber, diced",
      "2 tomatoes, chopped",
      "1/2 red onion, thinly sliced",
      "1/2 cup kalamata olives",
      "1/2 cup feta cheese, crumbled",
      "1/4 cup fresh parsley, chopped",
      "2 tablespoons olive oil",
      "2 tablespoons lemon juice",
      "1 teaspoon dried oregano",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Rinse quinoa under cold water until water runs clear.",
      "In a medium saucepan, bring vegetable broth to a boil. Add quinoa, reduce heat to low, cover and simmer for 15 minutes.",
      "Remove from heat and let stand 5 minutes. Fluff with a fork and let cool completely.",
      "In a large bowl, combine cooled quinoa, cucumber, tomatoes, red onion, olives, and feta cheese.",
      "In a small bowl, whisk together olive oil, lemon juice, oregano, salt, and pepper.",
      "Pour dressing over quinoa mixture and toss to combine.",
      "Garnish with fresh parsley and serve chilled or at room temperature."
    ],
    nutrition: {
      calories: 320,
      protein: 12,
      carbs: 45,
      fat: 11,
      fiber: 5,
      sugar: 6
    }
  },
  {
    id: 2,
    title: "Spicy Thai Basil Chicken",
    description: "A quick and spicy Thai stir-fry with ground chicken, fresh basil, and aromatic spices served over jasmine rice.",
    image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=500&h=300&fit=crop",
    category: "Asian",
    cookTime: 20,
    difficulty: "Medium",
    servings: 4,
    ingredients: [
      "1 lb ground chicken",
      "3 cloves garlic, minced",
      "2 Thai chilies, minced",
      "1 onion, sliced",
      "1 red bell pepper, sliced",
      "2 tablespoons vegetable oil",
      "2 tablespoons fish sauce",
      "1 tablespoon soy sauce",
      "1 tablespoon brown sugar",
      "1 cup fresh Thai basil leaves",
      "4 cups cooked jasmine rice",
      "4 fried eggs (optional)"
    ],
    instructions: [
      "Heat oil in a large wok or skillet over high heat.",
      "Add garlic and chilies, stir-fry for 30 seconds until fragrant.",
      "Add ground chicken and cook, breaking up with a spoon, until browned and cooked through.",
      "Add onion and bell pepper, stir-fry for 2-3 minutes until vegetables are tender-crisp.",
      "Stir in fish sauce, soy sauce, and brown sugar.",
      "Remove from heat and stir in fresh basil leaves until wilted.",
      "Serve over jasmine rice, topped with a fried egg if desired."
    ],
    nutrition: {
      calories: 450,
      protein: 28,
      carbs: 52,
      fat: 14,
      fiber: 2,
      sugar: 8
    }
  },
  {
    id: 3,
    title: "Classic Margherita Pizza",
    description: "A traditional Italian pizza with fresh mozzarella, basil, and a simple tomato sauce on a crispy homemade crust.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&h=300&fit=crop",
    category: "Italian",
    cookTime: 45,
    difficulty: "Medium",
    servings: 4,
    ingredients: [
      "1 pizza dough (store-bought or homemade)",
      "1/2 cup pizza sauce",
      "8 oz fresh mozzarella, sliced",
      "1/4 cup fresh basil leaves",
      "2 tablespoons olive oil",
      "1 teaspoon sea salt",
      "Freshly ground black pepper"
    ],
    instructions: [
      "Preheat oven to 500°F (260°C). If using a pizza stone, place it in the oven while preheating.",
      "On a floured surface, roll out pizza dough to desired thickness.",
      "Transfer dough to a parchment-lined baking sheet or pizza stone.",
      "Brush edges with olive oil and sprinkle with sea salt.",
      "Spread pizza sauce evenly over dough, leaving a 1-inch border.",
      "Arrange mozzarella slices over sauce.",
      "Bake for 12-15 minutes until crust is golden and cheese is bubbly.",
      "Remove from oven and immediately top with fresh basil leaves.",
      "Drizzle with remaining olive oil and season with black pepper."
    ],
    nutrition: {
      calories: 380,
      protein: 18,
      carbs: 42,
      fat: 16,
      fiber: 3,
      sugar: 4
    }
  },
  {
    id: 4,
    title: "Chocolate Avocado Mousse",
    description: "A rich and creamy chocolate mousse made with ripe avocados - a healthier twist on the classic dessert.",
    image: "https://images.unsplash.com/photo-1541599468348-e96984315921?w=500&h=300&fit=crop",
    category: "Dessert",
    cookTime: 15,
    difficulty: "Easy",
    servings: 6,
    ingredients: [
      "3 ripe avocados",
      "1/4 cup unsweetened cocoa powder",
      "1/4 cup maple syrup",
      "2 tablespoons almond butter",
      "1 teaspoon vanilla extract",
      "1/4 teaspoon sea salt",
      "2-3 tablespoons almond milk",
      "Fresh berries for garnish",
      "Mint leaves for garnish"
    ],
    instructions: [
      "Cut avocados in half, remove pits, and scoop flesh into a food processor.",
      "Add cocoa powder, maple syrup, almond butter, vanilla, and salt.",
      "Process until smooth and creamy, about 2-3 minutes.",
      "Add almond milk, 1 tablespoon at a time, until desired consistency is reached.",
      "Taste and adjust sweetness if needed.",
      "Divide mousse among 6 serving glasses or bowls.",
      "Refrigerate for at least 30 minutes before serving.",
      "Garnish with fresh berries and mint leaves before serving."
    ],
    nutrition: {
      calories: 185,
      protein: 4,
      carbs: 18,
      fat: 13,
      fiber: 8,
      sugar: 9
    }
  },
  {
    id: 5,
    title: "Lemon Herb Salmon",
    description: "Pan-seared salmon fillets with a bright lemon herb butter sauce, served with roasted vegetables.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=300&fit=crop",
    category: "Seafood",
    cookTime: 30,
    difficulty: "Medium",
    servings: 4,
    ingredients: [
      "4 salmon fillets (6 oz each)",
      "2 tablespoons olive oil",
      "3 tablespoons butter",
      "3 cloves garlic, minced",
      "1/4 cup fresh lemon juice",
      "2 tablespoons fresh dill, chopped",
      "2 tablespoons fresh parsley, chopped",
      "1 lb asparagus, trimmed",
      "1 lb baby potatoes, halved",
      "Salt and pepper to taste",
      "Lemon wedges for serving"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "Toss potatoes with 1 tablespoon olive oil, salt, and pepper. Roast for 20 minutes.",
      "Add asparagus to the baking sheet and roast for another 10-12 minutes.",
      "Season salmon fillets with salt and pepper.",
      "Heat remaining oil in a large skillet over medium-high heat.",
      "Cook salmon skin-side up for 4-5 minutes, then flip and cook 3-4 minutes more.",
      "Remove salmon from pan and keep warm.",
      "Add butter and garlic to the same pan, cook for 1 minute.",
      "Stir in lemon juice, dill, and parsley.",
      "Serve salmon with roasted vegetables and herb butter sauce."
    ],
    nutrition: {
      calories: 520,
      protein: 42,
      carbs: 28,
      fat: 26,
      fiber: 4,
      sugar: 4
    }
  },
  {
    id: 6,
    title: "Mexican Street Corn Salad",
    description: "A fresh and zesty salad inspired by Mexican street corn, perfect as a side dish or light meal.",
    image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=500&h=300&fit=crop",
    category: "Mexican",
    cookTime: 20,
    difficulty: "Easy",
    servings: 6,
    ingredients: [
      "6 ears corn, husks removed",
      "1/4 cup mayonnaise",
      "1/4 cup Mexican crema or sour cream",
      "1/2 cup cotija cheese, crumbled",
      "1/4 cup fresh cilantro, chopped",
      "2 tablespoons lime juice",
      "1 teaspoon chili powder",
      "1/2 teaspoon smoked paprika",
      "1 jalapeño, finely diced",
      "Salt to taste",
      "Lime wedges for serving"
    ],
    instructions: [
      "Grill corn over medium-high heat, turning occasionally, until charred in spots, about 10-12 minutes.",
      "Let corn cool, then cut kernels off the cobs.",
      "In a large bowl, combine mayonnaise, crema, lime juice, chili powder, and paprika.",
      "Add corn kernels, cotija cheese, cilantro, and jalapeño.",
      "Toss to combine and season with salt to taste.",
      "Refrigerate for 30 minutes to allow flavors to meld.",
      "Serve with lime wedges and extra cotija cheese if desired."
    ],
    nutrition: {
      calories: 220,
      protein: 7,
      carbs: 32,
      fat: 9,
      fiber: 4,
      sugar: 8
    }
  },
  {
    id: 7,
    title: "Japanese Chicken Teriyaki",
    description: "Tender chicken thighs glazed with homemade teriyaki sauce, served with steamed rice and vegetables.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=300&fit=crop",
    category: "Asian",
    cookTime: 35,
    difficulty: "Medium",
    servings: 4,
    ingredients: [
      "2 lbs chicken thighs, boneless and skinless",
      "1/2 cup soy sauce",
      "1/4 cup mirin",
      "1/4 cup sake or dry white wine",
      "3 tablespoons brown sugar",
      "2 tablespoons honey",
      "3 cloves garlic, minced",
      "1 tablespoon fresh ginger, grated",
      "1 tablespoon vegetable oil",
      "2 green onions, sliced",
      "1 tablespoon sesame seeds",
      "4 cups steamed rice"
    ],
    instructions: [
      "In a small saucepan, combine soy sauce, mirin, sake, brown sugar, honey, garlic, and ginger.",
      "Bring to a boil, then reduce heat and simmer for 8-10 minutes until thickened.",
      "Heat oil in a large skillet over medium-high heat.",
      "Season chicken with salt and pepper, then cook for 6-7 minutes per side until golden.",
      "Reduce heat to medium and pour teriyaki sauce over chicken.",
      "Simmer for 5-8 minutes, turning chicken to coat with sauce.",
      "Remove from heat and let rest for 5 minutes.",
      "Slice chicken and serve over rice, drizzled with remaining sauce.",
      "Garnish with green onions and sesame seeds."
    ],
    nutrition: {
      calories: 485,
      protein: 38,
      carbs: 58,
      fat: 12,
      fiber: 1,
      sugar: 18
    }
  },
  {
    id: 8,
    title: "Greek Village Salad",
    description: "A traditional Greek salad with ripe tomatoes, cucumber, olives, and feta cheese in a simple olive oil dressing.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=300&fit=crop",
    category: "Healthy",
    cookTime: 15,
    difficulty: "Easy",
    servings: 4,
    ingredients: [
      "4 large tomatoes, cut into wedges",
      "1 large cucumber, sliced",
      "1 red onion, thinly sliced",
      "1 green bell pepper, sliced",
      "1/2 cup kalamata olives",
      "8 oz feta cheese, cubed",
      "1/4 cup extra virgin olive oil",
      "2 tablespoons red wine vinegar",
      "1 teaspoon dried oregano",
      "Salt and freshly ground pepper",
      "Fresh oregano for garnish"
    ],
    instructions: [
      "In a large bowl, combine tomatoes, cucumber, red onion, and bell pepper.",
      "Add olives and feta cheese to the bowl.",
      "In a small bowl, whisk together olive oil, vinegar, and dried oregano.",
      "Season dressing with salt and pepper to taste.",
      "Pour dressing over salad and toss gently to combine.",
      "Let salad sit for 15-20 minutes to allow flavors to meld.",
      "Garnish with fresh oregano before serving.",
      "Serve with warm pita bread if desired."
    ],
    nutrition: {
      calories: 285,
      protein: 11,
      carbs: 18,
      fat: 21,
      fiber: 5,
      sugar: 12
    }
  }
];

export const mockCategories = [
  { id: 'all', name: 'All Recipes', count: mockRecipes.length },
  { id: 'healthy', name: 'Healthy', count: mockRecipes.filter(r => r.category === 'Healthy').length },
  { id: 'asian', name: 'Asian', count: mockRecipes.filter(r => r.category === 'Asian').length },
  { id: 'italian', name: 'Italian', count: mockRecipes.filter(r => r.category === 'Italian').length },
  { id: 'mexican', name: 'Mexican', count: mockRecipes.filter(r => r.category === 'Mexican').length },
  { id: 'seafood', name: 'Seafood', count: mockRecipes.filter(r => r.category === 'Seafood').length },
  { id: 'dessert', name: 'Dessert', count: mockRecipes.filter(r => r.category === 'Dessert').length }
];
