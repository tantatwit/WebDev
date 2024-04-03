import React, { useState } from 'react';

const RecipeSubmission = ({ onSubmit }) => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create the recipe object
    const newRecipe = {
      name: recipeName,
      ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
      instructions: instructions.split(',').map(instruction => instruction.trim())
    };

    // Call the onSubmit function with the new recipe
    onSubmit(newRecipe);

    // Clear the form fields
    setRecipeName('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div>
      <h2>Submit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="recipeName">Recipe Name:</label>
          <input
            type="text"
            id="recipeName"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            style={{ width: '100%', padding: '10px' }} // Apply styles for bigger input box
          />
        </div>
        <div className="form-group">
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            style={{ width: '100%', height: '100px', padding: '10px' }} // Apply styles for bigger textarea
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            style={{ width: '100%', height: '200px', padding: '10px' }} // Apply styles for bigger textarea
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RecipeSubmission;
