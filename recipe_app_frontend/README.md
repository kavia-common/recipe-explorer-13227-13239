# Recipe Explorer - React Frontend Application

A modern, responsive React application for discovering, saving, and managing recipes. Built with a clean design using the specified color palette and featuring comprehensive recipe management capabilities.

## 🚀 Features

### Core Functionality
- **Browse Recipes**: View recipes in a responsive grid layout with beautiful card designs
- **Search & Filter**: Search recipes by keywords, ingredients, or filter by category
- **Recipe Details**: View detailed recipes with ingredients, instructions, and nutritional information
- **User Authentication**: Mock login/signup system ready for backend integration
- **Personal Collections**: Create and manage custom recipe collections
- **Nutritional Information**: Display comprehensive nutritional data for each recipe

### UI/UX Features
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Interface**: Clean, light theme with intuitive navigation
- **Sidebar Navigation**: Collapsible sidebar with search and category filtering
- **Color Palette**: Primary (#4CAF50), Secondary (#FF9800), Accent (#607D8B)
- **PWA Ready**: Service worker and manifest for offline functionality

## 🛠️ Technology Stack

- **React 18.2.0**: Modern React with hooks and functional components
- **React Router DOM 6.x**: Client-side routing and navigation
- **CSS Variables**: Dynamic theming and consistent styling
- **LocalStorage**: Persistent user data and collections
- **Service Worker**: Basic offline functionality
- **Mock Data**: Comprehensive recipe dataset for development

## 📦 Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Configuration**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── Collections.js    # Recipe collections management
│   ├── CollectionModal.js # Modal for adding to collections
│   ├── LoginForm.js      # User authentication
│   ├── Profile.js        # User profile management
│   ├── RecipeCard.js     # Individual recipe card
│   ├── RecipeDetail.js   # Detailed recipe view
│   ├── RecipeGrid.js     # Recipe grid layout
│   ├── SearchResults.js  # Search results display
│   ├── Sidebar.js        # Navigation sidebar
│   └── SignupForm.js     # User registration
├── data/
│   └── mockData.js       # Mock recipe data
├── utils/
│   └── helpers.js        # Utility functions
├── App.js                # Main application component
├── App.css               # Global styles and component styles
├── index.js              # Application entry point
└── index.css             # Base styles
```

## 🎨 Design System

### Color Palette
- **Primary**: #4CAF50 (Green) - Main actions, navigation
- **Secondary**: #FF9800 (Orange) - Secondary actions, highlights  
- **Accent**: #607D8B (Blue Grey) - Accents, metadata
- **Background**: #ffffff (White) - Primary background
- **Text**: #2c3e50 (Dark) - Primary text color

### Typography
- **Font Family**: System font stack for optimal performance
- **Headings**: Bold weights with proper hierarchy
- **Body Text**: Regular weight with good readability

### Layout
- **Grid System**: CSS Grid for recipe cards
- **Flexbox**: Component-level layouts
- **Responsive**: Mobile-first approach with breakpoints

## 📱 Components Overview

### Core Components

**App.js**
- Main application logic and state management
- User authentication handling
- Recipe filtering and search functionality
- Collection management

**Sidebar.js**
- Navigation menu with collapsible functionality
- Search input with real-time filtering
- Category selection
- User welcome message and logout

**RecipeGrid.js & RecipeCard.js**
- Responsive grid layout for recipe display
- Individual recipe cards with hover effects
- Quick actions (view, save to collection)

**RecipeDetail.js**
- Full recipe view with large image
- Ingredient list and step-by-step instructions
- Nutritional information display
- Collection management integration

### Authentication Components

**LoginForm.js & SignupForm.js**
- Mock authentication system
- Form validation and error handling
- Responsive design for all screen sizes

**Profile.js**
- User profile management
- Edit profile functionality
- Activity statistics display

### Collection Components

**Collections.js**
- View and manage saved recipe collections
- Remove recipes from collections
- Delete entire collections

**CollectionModal.js**
- Add recipes to existing collections
- Create new collections on-the-fly
- Intuitive modal interface

## 🔧 Configuration

### Environment Variables
```env
REACT_APP_SITE_URL=http://localhost:3000
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_NAME="Recipe Explorer"
REACT_APP_VERSION=1.0.0
```

### Mock Data
The application includes comprehensive mock data with:
- 8 diverse recipes across multiple categories
- Nutritional information for each recipe
- High-quality placeholder images from Unsplash
- Realistic cooking times and difficulty levels

## 🚀 Deployment

### Build Production Version
```bash
npm run build
```

### Deploy to Static Hosting
The build folder can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

## 🔮 Future Enhancements

### Backend Integration
- Replace mock authentication with real API calls
- Connect to recipe database
- User-generated content and reviews
- Real-time search with backend filtering

### Additional Features
- Recipe rating and review system
- Meal planning and shopping lists
- Social sharing capabilities
- Advanced filtering (dietary restrictions, prep time)
- Recipe import from URLs
- Print-friendly recipe formats

### Performance Optimizations
- Image lazy loading and optimization
- Virtual scrolling for large recipe lists
- Caching strategies for better performance
- Bundle splitting and code optimization

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

## 📄 License

This project is created for demonstration purposes. All recipe data is mock data for development use.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please refer to the project documentation or create an issue in the repository.

---

**Recipe Explorer** - Discover, Save, and Enjoy Delicious Recipes! 🍳✨
