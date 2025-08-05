import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import RecipeGrid from './components/RecipeGrid';
import RecipeDetail from './components/RecipeDetail';
import SearchResults from './components/SearchResults';
import Collections from './components/Collections';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Profile from './components/Profile';
import { mockRecipes } from './data/mockData';

// PUBLIC_INTERFACE
function App() {
  const [user, setUser] = useState(null);
  const [recipes] = useState(mockRecipes);
  const [collections, setCollections] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Check for logged in user on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('recipeAppUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    
    const savedCollections = localStorage.getItem('recipeAppCollections');
    if (savedCollections) {
      setCollections(JSON.parse(savedCollections));
    }
  }, []);

  // Save collections to localStorage whenever they change
  useEffect(() => {
    if (collections.length > 0) {
      localStorage.setItem('recipeAppCollections', JSON.stringify(collections));
    }
  }, [collections]);

  // PUBLIC_INTERFACE
  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('recipeAppUser', JSON.stringify(userData));
  };

  // PUBLIC_INTERFACE
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('recipeAppUser');
    localStorage.removeItem('recipeAppCollections');
    setCollections([]);
  };

  // PUBLIC_INTERFACE
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // PUBLIC_INTERFACE
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // PUBLIC_INTERFACE
  const addToCollection = (recipeId, collectionName) => {
    const existingCollection = collections.find(c => c.name === collectionName);
    if (existingCollection) {
      if (!existingCollection.recipes.includes(recipeId)) {
        setCollections(collections.map(c => 
          c.name === collectionName 
            ? { ...c, recipes: [...c.recipes, recipeId] }
            : c
        ));
      }
    } else {
      setCollections([...collections, {
        id: Date.now(),
        name: collectionName,
        recipes: [recipeId],
        createdAt: new Date().toISOString()
      }]);
    }
  };

  // PUBLIC_INTERFACE
  const removeFromCollection = (recipeId, collectionId) => {
    setCollections(collections.map(c => 
      c.id === collectionId 
        ? { ...c, recipes: c.recipes.filter(r => r !== recipeId) }
        : c
    ));
  };

  // PUBLIC_INTERFACE
  const deleteCollection = (collectionId) => {
    setCollections(collections.filter(c => c.id !== collectionId));
  };

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = !searchQuery || 
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
      recipe.category.toLowerCase() === selectedCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Router>
      <div className="App">
        {user ? (
          <div className="app-layout">
            <Sidebar 
              user={user}
              onLogout={handleLogout}
              onSearch={handleSearch}
              onCategoryChange={handleCategoryChange}
              selectedCategory={selectedCategory}
              collapsed={sidebarCollapsed}
              onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
            />
            <main className={`main-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
              <Routes>
                <Route 
                  path="/" 
                  element={
                    <RecipeGrid 
                      recipes={filteredRecipes}
                      onAddToCollection={addToCollection}
                      collections={collections}
                    />
                  } 
                />
                <Route 
                  path="/recipe/:id" 
                  element={
                    <RecipeDetail 
                      recipes={recipes}
                      onAddToCollection={addToCollection}
                      collections={collections}
                    />
                  } 
                />
                <Route 
                  path="/search" 
                  element={
                    <SearchResults 
                      recipes={filteredRecipes}
                      searchQuery={searchQuery}
                      onAddToCollection={addToCollection}
                      collections={collections}
                    />
                  } 
                />
                <Route 
                  path="/collections" 
                  element={
                    <Collections 
                      collections={collections}
                      recipes={recipes}
                      onRemoveFromCollection={removeFromCollection}
                      onDeleteCollection={deleteCollection}
                    />
                  } 
                />
                <Route 
                  path="/profile" 
                  element={<Profile user={user} onLogout={handleLogout} />} 
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
        ) : (
          <div className="auth-container">
            <Routes>
              <Route 
                path="/login" 
                element={<LoginForm onLogin={handleLogin} />} 
              />
              <Route 
                path="/signup" 
                element={<SignupForm onLogin={handleLogin} />} 
              />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
