import { Item  } from './components'; 

const items = [
  {name: "Apple", price: 0.99, description: "A fresh red apple."},
  {name: "Banana", price: 0.59, description: "A ripe yellow banana."},
  {name: "Orange", price: 0.79, description: "A juicy orange."},
  {name: "Grapes", price: 2.99, description: "A bunch of grapes."},
  {name: "Strawberries", price: 3.49, description: "A box of strawberries."}
]

function App() {
  return (
    <div>
      {items.map((item, index) => (
        <Item key={index} name={item.name} price={item.price} description={item.description} />
      ))}
    </div>
  );
}

export default App;
