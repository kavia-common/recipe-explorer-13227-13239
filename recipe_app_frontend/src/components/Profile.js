import React, { useState } from 'react';

// PUBLIC_INTERFACE
const Profile = ({ user, onLogout }) => {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would update the user profile via API
    console.log('Profile updated:', formData);
    setEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || ''
    });
    setEditing(false);
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          {getInitials(user?.name || user?.email || 'U')}
        </div>
        <h1 className="profile-name">{user?.name || 'User'}</h1>
        <p className="profile-email">{user?.email}</p>
      </div>

      <div className="profile-content">
        {!editing ? (
          <div className="profile-info">
            <h3>Profile Information</h3>
            <div className="profile-field">
              <label>Name:</label>
              <span>{user?.name || 'Not provided'}</span>
            </div>
            <div className="profile-field">
              <label>Email:</label>
              <span>{user?.email}</span>
            </div>
            <div className="profile-field">
              <label>Member since:</label>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            
            <div className="profile-actions">
              <button 
                className="btn btn-primary"
                onClick={() => setEditing(true)}
              >
                Edit Profile
              </button>
              <button 
                className="btn btn-secondary"
                onClick={onLogout}
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div className="profile-edit">
            <h3>Edit Profile</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
                <button 
                  type="button" 
                  className="btn btn-outline"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      <div className="profile-stats">
        <h3>Your Recipe Activity</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-value">0</div>
            <div className="stat-label">Recipes Saved</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">0</div>
            <div className="stat-label">Collections Created</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">0</div>
            <div className="stat-label">Recipes Cooked</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">0</div>
            <div className="stat-label">Reviews Written</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
