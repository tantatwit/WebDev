import React, { useState } from 'react';

function List() {
  const [items, setItems] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    const newItem = e.target.elements.item.value;
    if (newItem) {
      setItems([...items, newItem]);
      e.target.elements.item.value = '';
    }
  };

  return (
    <div>
      <h2>List of Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <form onSubmit={addItem}>
        <input type="text" name="item" />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default List;
