import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CollectionModal from './CollectionModal';

// PUBLIC_INTERFACE
const RecipeDetail = ({ recipes, onAddToCollection, collections }) => {
  const { id } = useParams();
  const [showCollectionModal, setShowCollectionModal] = useState(false);
  
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="recipe-not-found">
        <h2>Recipe not found</h2>
        <p>The recipe you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">Back to Recipes</Link>
      </div>
    );
  }

  const handleAddToCollection = () => {
    setShowCollectionModal(true);
  };

  const handleCollectionSelect = (collectionName) => {
    onAddToCollection(recipe.id, collectionName);
    setShowCollectionModal(false);
  };

  return (
    <>
      <div className="recipe-detail">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="recipe-detail-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/800x400?text=Recipe+Image';
          }}
        />
        
        <div className="recipe-detail-content">
          <div className="recipe-detail-header">
            <h1 className="recipe-detail-title">{recipe.title}</h1>
            
            <div className="recipe-detail-meta">
              <div className="meta-item">
                <span className="icon">⏱️</span>
                <span>{recipe.cookTime} minutes</span>
              </div>
              <div className="meta-item">
                <span className="icon">👥</span>
                <span>{recipe.servings} servings</span>
              </div>
              <div className="meta-item">
                <span className="icon">📊</span>
                <span>{recipe.difficulty}</span>
              </div>
              <div className="meta-item">
                <span className="icon">🏷️</span>
                <span>{recipe.category}</span>
              </div>
            </div>
            
            <p className="recipe-detail-description">{recipe.description}</p>
            
            <div className="recipe-actions">
              <button 
                className="btn btn-primary"
                onClick={handleAddToCollection}
              >
                Save to Collection
              </button>
              <Link to="/" className="btn btn-outline">
                Back to Recipes
              </Link>
            </div>
          </div>

          <div className="recipe-sections">
            <div className="recipe-section">
              <h3>Ingredients</h3>
              <ul className="ingredients-list">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className="recipe-section">
              <h3>Instructions</h3>
              <ol className="instructions-list">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
          </div>

          {recipe.nutrition && (
            <div className="nutrition-info">
              <h3>Nutritional Information</h3>
              <div className="nutrition-grid">
                <div className="nutrition-item">
                  <div className="nutrition-value">{recipe.nutrition.calories}</div>
                  <div className="nutrition-label">Calories</div>
                </div>
                <div className="nutrition-item">
                  <div className="nutrition-value">{recipe.nutrition.protein}g</div>
                  <div className="nutrition-label">Protein</div>
                </div>
                <div className="nutrition-item">
                  <div className="nutrition-value">{recipe.nutrition.carbs}g</div>
                  <div className="nutrition-label">Carbs</div>
                </div>
                <div className="nutrition-item">
                  <div className="nutrition-value">{recipe.nutrition.fat}g</div>
                  <div className="nutrition-label">Fat</div>
                </div>
                <div className="nutrition-item">
                  <div className="nutrition-value">{recipe.nutrition.fiber}g</div>
                  <div className="nutrition-label">Fiber</div>
                </div>
                <div className="nutrition-item">
                  <div className="nutrition-value">{recipe.nutrition.sugar}g</div>
                  <div className="nutrition-label">Sugar</div>
                </div>
              </div>
            </div>
          )}
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

export default RecipeDetail;
