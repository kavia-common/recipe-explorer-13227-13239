/**
 * Utility functions for the Recipe Explorer application
 */

// PUBLIC_INTERFACE
export const formatTime = (minutes) => {
  if (minutes < 60) {
    return `${minutes} min`;
  } else {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0 
      ? `${hours}h ${remainingMinutes}m`
      : `${hours}h`;
  }
};

// PUBLIC_INTERFACE
export const getDifficultyColor = (difficulty) => {
  switch (difficulty?.toLowerCase()) {
    case 'easy': return '#4CAF50';
    case 'medium': return '#FF9800';
    case 'hard': return '#f44336';
    default: return '#607D8B';
  }
};

// PUBLIC_INTERFACE
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// PUBLIC_INTERFACE
export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

// PUBLIC_INTERFACE
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// PUBLIC_INTERFACE
export const generateId = () => {
  return Date.now() + Math.random().toString(36).substr(2, 9);
};

// PUBLIC_INTERFACE
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// PUBLIC_INTERFACE
export const searchRecipes = (recipes, query, category = 'all') => {
  return recipes.filter(recipe => {
    const matchesSearch = !query || 
      recipe.title.toLowerCase().includes(query.toLowerCase()) ||
      recipe.description.toLowerCase().includes(query.toLowerCase()) ||
      recipe.ingredients.some(ing => 
        ing.toLowerCase().includes(query.toLowerCase())
      );
    
    const matchesCategory = category === 'all' || 
      recipe.category.toLowerCase() === category.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });
};

// PUBLIC_INTERFACE
export const sortRecipes = (recipes, sortBy = 'title') => {
  return [...recipes].sort((a, b) => {
    switch (sortBy) {
      case 'title':
        return a.title.localeCompare(b.title);
      case 'cookTime':
        return a.cookTime - b.cookTime;
      case 'difficulty':
        const difficultyOrder = { 'easy': 1, 'medium': 2, 'hard': 3 };
        return difficultyOrder[a.difficulty.toLowerCase()] - 
               difficultyOrder[b.difficulty.toLowerCase()];
      default:
        return 0;
    }
  });
};
