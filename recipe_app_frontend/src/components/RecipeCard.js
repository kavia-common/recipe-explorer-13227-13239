import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CollectionModal from './CollectionModal';

// PUBLIC_INTERFACE
const RecipeCard = ({ recipe, onAddToCollection, collections }) => {
  const [showCollectionModal, setShowCollectionModal] = useState(false);

  const handleAddToCollection = () => {
    setShowCollectionModal(true);
  };

  const handleCollectionSelect = (collectionName) => {
    onAddToCollection(recipe.id, collectionName);
    setShowCollectionModal(false);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return '#4CAF50';
      case 'medium': return '#FF9800';
      case 'hard': return '#f44336';
      default: return '#607D8B';
    }
  };

  return (
    <>
      <div className="recipe-card">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="recipe-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/500x300?text=Recipe+Image';
          }}
        />
        <div className="recipe-content">
          <h3 className="recipe-title">{recipe.title}</h3>
          <p className="recipe-description">{recipe.description}</p>
          
          <div className="recipe-meta">
            <div className="recipe-time">
              <span className="icon">⏱️</span>
              <span>{recipe.cookTime} min</span>
            </div>
            <div className="recipe-difficulty">
              <span 
                className="icon" 
                style={{ color: getDifficultyColor(recipe.difficulty) }}
              >
                ●
              </span>
              <span>{recipe.difficulty}</span>
            </div>
          </div>

          <div className="recipe-actions">
            <Link 
              to={`/recipe/${recipe.id}`}
              className="btn btn-primary"
            >
              View Recipe
            </Link>
            <button 
              className="btn btn-outline"
              onClick={handleAddToCollection}
            >
              Save
            </button>
          </div>
        </div>
      </div>

      {showCollectionModal && (
        <CollectionModal
          collections={collections}
          onSelect={handleCollectionSelect}
          onClose={() => setShowCollectionModal(false)}
        />
      )}
    </>
  );
};

export default RecipeCard;
