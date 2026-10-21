import { useState } from 'react';
import { Item } from './components';

import "./App.css";

const items = [
  {name: "Apple", price: 0.99, description: "A fresh red apple."},
  {name: "Banana", price: 0.59, description: "A ripe yellow banana."},
  {name: "Orange", price: 0.79, description: "A juicy orange."},
  {name: "Grapes", price: 2.99, description: "A bunch of grapes."},
  {name: "Strawberries", price: 3.49, description: "A box of strawberries."}
]

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  return (
    <div>
      <div className="ItemList">
        {items.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            price={item.price}
            description={item.description}
            onClick={() => setShoppingCart([...shoppingCart, item])}
          />
        ))}
      </div>
      {showShoppingCart ? (
        <div className="ShoppingCart">
          <h1>My Shopping Cart</h1>
          {shoppingCart.map((item, index) => (
            <Item
              key={index}
              name={item.name}
              price={item.price}
              description={item.description}
            />
          ))}
          <button className="CloseButton" onClick={() => setShowShoppingCart(false)}>Close</button>
        </div>
        )
        : (
          <button className="RevealButton" onClick={() => setShowShoppingCart(true)}>{"<<"}</button>
        )
      }
    </div>
  );
}

export default App;
