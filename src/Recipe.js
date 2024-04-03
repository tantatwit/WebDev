/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  return (
    <div>
      <h1>Recipe Page</h1>
      <Link to="/add-recipe">
        <button>Add Recipe</button>
      </Link>
      <h2>Recipes:</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
*/

import React from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import RecipeSubmission from './RecipeSubmission';

const Recipe = () => {
  const history = useHistory();

  const handleAddRecipeClick = () => {
    history.push('/submit-recipe');
  };

  const handleRecipeSubmission = (recipeName) => {
    // Handle recipe submission here
    console.log('Submitted recipe:', recipeName);
    // Redirect back to recipe page after submission
    history.push('/');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <button
      onClick={handleAddRecipeClick}
      style={{
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '0px'
  }}
>
  Add Recipe
</button>

      <Route path="/submit-recipe">
        <RecipeSubmission onSubmit={handleRecipeSubmission} />
      </Route>
    </div>
  );
};

export default Recipe;
