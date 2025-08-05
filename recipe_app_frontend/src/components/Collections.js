import React from 'react';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
const Collections = ({ collections, recipes, onRemoveFromCollection, onDeleteCollection }) => {
  const getRecipeById = (id) => {
    return recipes.find(recipe => recipe.id === id);
  };

  if (collections.length === 0) {
    return (
      <div className="collections-container">
        <div className="collections-header">
          <h1 className="collections-title">My Collections</h1>
          <p>You haven't created any collections yet. Start by saving some recipes!</p>
          <Link to="/" className="btn btn-primary">Browse Recipes</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="collections-container">
      <div className="collections-header">
        <h1 className="collections-title">My Collections</h1>
        <p>Manage your saved recipe collections</p>
      </div>

      <div className="collections-grid">
        {collections.map(collection => (
          <div key={collection.id} className="collection-card">
            <div className="collection-header">
              <h3 className="collection-name">{collection.name}</h3>
              <div className="collection-actions">
                <span className="collection-count">{collection.recipes.length}</span>
                <button
                  className="btn btn-secondary"
                  onClick={() => onDeleteCollection(collection.id)}
                  title="Delete collection"
                >
                  🗑️
                </button>
              </div>
            </div>

            <div className="collection-recipes">
              {collection.recipes.length === 0 ? (
                <p className="empty-collection">No recipes in this collection</p>
              ) : (
                <ul className="collection-recipe-list">
                  {collection.recipes.map(recipeId => {
                    const recipe = getRecipeById(recipeId);
                    if (!recipe) return null;
                    
                    return (
                      <li key={recipeId} className="collection-recipe">
                        <div className="collection-recipe-info">
                          <Link 
                            to={`/recipe/${recipe.id}`}
                            className="collection-recipe-name"
                          >
                            {recipe.title}
                          </Link>
                          <span className="collection-recipe-meta">
                            {recipe.cookTime} min • {recipe.difficulty}
                          </span>
                        </div>
                        <button
                          className="remove-btn"
                          onClick={() => onRemoveFromCollection(recipeId, collection.id)}
                          title="Remove from collection"
                        >
                          ✕
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <div className="collection-footer">
              <small className="collection-date">
                Created {new Date(collection.createdAt).toLocaleDateString()}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
