import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mockCategories } from '../data/mockData';

// PUBLIC_INTERFACE
const Sidebar = ({ 
  user, 
  onLogout, 
  onSearch, 
  onCategoryChange, 
  selectedCategory, 
  collapsed, 
  onToggleCollapse 
}) => {
  const location = useLocation();
  
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  const handleCategoryClick = (categoryId) => {
    onCategoryChange(categoryId);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button 
        className="collapse-btn"
        onClick={onToggleCollapse}
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed ? '→' : '←'}
      </button>
      
      <div className="sidebar-header">
        <h1>Recipe Explorer</h1>
        {!collapsed && (
          <p className="user-welcome">Welcome, {user?.name || user?.email}!</p>
        )}
      </div>

      {!collapsed && (
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search recipes..."
            onChange={handleSearchChange}
          />
        </div>
      )}

      <nav>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActiveRoute('/') ? 'active' : ''}`}
            >
              <span className="icon">🏠</span>
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/collections" 
              className={`nav-link ${isActiveRoute('/collections') ? 'active' : ''}`}
            >
              <span className="icon">📚</span>
              <span>My Collections</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/profile" 
              className={`nav-link ${isActiveRoute('/profile') ? 'active' : ''}`}
            >
              <span className="icon">👤</span>
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </nav>

      {!collapsed && (
        <div className="categories">
          <h3>Categories</h3>
          <ul className="category-list">
            {mockCategories.map(category => (
              <li key={category.id} className="category-item">
                <button
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  {category.name} ({category.count})
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="sidebar-footer">
        <button 
          className="logout-btn"
          onClick={onLogout}
        >
          <span className="icon">🚪</span>
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
