import React, { useState } from 'react';

const RecipeSubmission = ({ onSubmit }) => {
  const [recipeName, setRecipeName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(recipeName);
    setRecipeName('');
  };

  return (
    <div>
      <h2>Submit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter recipe name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />
        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
};

export default RecipeSubmission;
