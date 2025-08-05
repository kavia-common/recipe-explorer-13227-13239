import React from 'react';
import RecipeCard from './RecipeCard';

// PUBLIC_INTERFACE
const RecipeGrid = ({ recipes, onAddToCollection, collections }) => {
  if (recipes.length === 0) {
    return (
      <div className="recipe-grid-empty">
        <p>No recipes found. Try adjusting your search or category filter.</p>
      </div>
    );
  }

  return (
    <div className="recipe-grid-container">
      <div className="recipe-grid-header">
        <h2>Recipes ({recipes.length})</h2>
        <p>Discover delicious recipes for every occasion</p>
      </div>
      <div className="recipe-grid">
        {recipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onAddToCollection={onAddToCollection}
            collections={collections}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeGrid;
