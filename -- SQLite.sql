CREATE TABLE IF NOT EXISTS recipes (
    recipe_id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL
);


/*INSERT INTO recipes (title, ingredients, instructions) VALUES ('Recipe Title', 'Ingredient 1, Ingredient 2', 'Instruction 1, Instruction 2');
*/

/*DELETE FROM recipes WHERE recipe_id = 4;*/
