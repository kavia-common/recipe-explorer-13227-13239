import React from 'react';
import RecipeCard from './RecipeCard';

// PUBLIC_INTERFACE
const SearchResults = ({ recipes, searchQuery, onAddToCollection, collections }) => {
  return (
    <div className="search-results">
      <div className="search-results-header">
        <h2>
          {searchQuery 
            ? `Search Results for "${searchQuery}" (${recipes.length})`
            : `All Recipes (${recipes.length})`
          }
        </h2>
        {searchQuery && recipes.length === 0 && (
          <p>No recipes found matching your search. Try different keywords or browse by category.</p>
        )}
      </div>
      
      {recipes.length > 0 && (
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
      )}
    </div>
  );
};

export default SearchResults;
