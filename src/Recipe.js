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
import { useHistory } from 'react-router-dom';

const Recipe = ({ recipes }) => {
  const history = useHistory();

  const handleAddRecipe = () => {
    history.push('/submit-recipe');
  };

  return (
    <div>
      <h1>Recipe Page</h1>
      {/* Map over the recipes array and render each recipe */}
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h2>{recipe.name}</h2>
            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            <p>Instructions: {recipe.instructions.join(', ')}</p>
          </li>
        ))}
      </ul>
      {/* Button to navigate to the Recipe Submission page */}
      <button onClick={handleAddRecipe}>Add Recipe</button>
    </div>
  );
};

export default Recipe;
