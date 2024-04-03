/*import React, { useState } from 'react';

const AddRecipeForm = ({ onSubmit }) => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields here if needed
    if (!recipeName.trim() || !ingredients.trim() || !instructions.trim()) {
      alert('Please fill out all fields.');
      return;
    }
    // Call the onSubmit callback function with the new recipe data
    onSubmit({ recipeName, ingredients, instructions });
    // Clear the form fields after submission
    setRecipeName('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="recipeName">Recipe Name:</label>
        <input
          type="text"
          id="recipeName"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="instructions">Instructions:</label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
*/

/*import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddRecipeForm = () => {
  const [recipeName, setRecipeName] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, such as adding the recipe to a list
    console.log('Recipe Name:', recipeName);
    // Clear the input field after submitting
    setRecipeName('');
    // Redirect back to the recipe page after submission
    history.push('/recipes');
  };

  return (
    <div>
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter recipe name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
*/

import React, { useState } from 'react';

const AddRecipeForm = ({ onAddRecipe }) => {
  const [recipeName, setRecipeName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the function to add the recipe to the list
    onAddRecipe(recipeName);
    // Clear the input field after submitting
    setRecipeName('');
  };

  return (
    <div>
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter recipe name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
