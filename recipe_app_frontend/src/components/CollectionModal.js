import React, { useState } from 'react';

// PUBLIC_INTERFACE
const CollectionModal = ({ collections, onSelect, onClose }) => {
  const [newCollectionName, setNewCollectionName] = useState('');
  const [showNewCollection, setShowNewCollection] = useState(false);

  const handleExistingCollection = (collectionName) => {
    onSelect(collectionName);
  };

  const handleNewCollection = () => {
    if (newCollectionName.trim()) {
      onSelect(newCollectionName.trim());
      setNewCollectionName('');
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="collection-modal" onClick={handleOverlayClick}>
      <div className="collection-modal-content">
        <h3>Save to Collection</h3>
        
        {collections.length > 0 && (
          <div className="collection-options">
            <h4>Existing Collections:</h4>
            {collections.map(collection => (
              <button
                key={collection.id}
                className="collection-option"
                onClick={() => handleExistingCollection(collection.name)}
              >
                {collection.name} ({collection.recipes.length} recipes)
              </button>
            ))}
          </div>
        )}

        <div className="new-collection-section">
          {!showNewCollection ? (
            <button
              className="btn btn-outline"
              onClick={() => setShowNewCollection(true)}
            >
              + Create New Collection
            </button>
          ) : (
            <div className="new-collection-form">
              <input
                type="text"
                className="new-collection-input"
                placeholder="Collection name..."
                value={newCollectionName}
                onChange={(e) => setNewCollectionName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleNewCollection()}
                autoFocus
              />
              <div className="modal-actions">
                <button
                  className="btn btn-cancel"
                  onClick={() => {
                    setShowNewCollection(false);
                    setNewCollectionName('');
                  }}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleNewCollection}
                  disabled={!newCollectionName.trim()}
                >
                  Create
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="modal-actions">
          <button className="btn btn-cancel" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionModal;
