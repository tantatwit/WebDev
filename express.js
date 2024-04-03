const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors'); // Import CORS middleware if needed

const app = express();
const port = 3001; // Choose a port for your backend server

app.use(express.json());
app.use(cors()); // Use CORS middleware if you need to allow cross-origin requests

const db = new sqlite3.Database('recipes_db.sqlite');

db.run(`CREATE TABLE IF NOT EXISTS recipes (
    recipe_id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL
)`);

app.post('/recipes', (req, res) => {
    const { title, ingredients, instructions } = req.body;
    
    db.run("INSERT INTO recipes (title, ingredients, instructions) VALUES (?, ?, ?)",
        [title, ingredients, instructions],
        function(err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(201).json({ message: "Recipe added successfully", recipe_id: this.lastID });
        }
    );
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
