// Import necessary modules
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

// Create Express app
const app = express();
const port = 3000;

// Connect to SQLite database
const db = new sqlite3.Database('recipes_db.sqlite');

// Create a table for recipes if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS recipes (
    recipe_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL
)`);

// Middleware to parse JSON request body
app.use(express.json());

// Route to handle recipe submission
app.post('/submit-recipe', (req, res) => {
    const { name, ingredients, instructions } = req.body;

    // Insert recipe data into the database
    db.run("INSERT INTO recipes (name, ingredients, instructions) VALUES (?, ?, ?)",
        [name, ingredients, instructions],
        function(err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(201).json({ message: "Recipe added successfully", recipe_id: this.lastID });
        }
    );
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
