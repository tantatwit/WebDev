// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Recipe from './Recipe';
import Header from './Header';
import Footer from './Footer';
import RecipeSubmission from './RecipeSubmission';
import './app.css';

const App = () => {
  // Define state to store recipe data
  const [recipes, setRecipes] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* Pass recipes state to Recipe component */}
          <Route path="/recipe" render={(props) => <Recipe {...props} recipes={recipes} />} />
          <Route path="/submit-recipe" component={RecipeSubmission} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
