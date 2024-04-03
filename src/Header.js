import React from 'react';

function Header() {
  return (
    <header>
      <h1>BudgetBytes</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/recipe">Recipes</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
