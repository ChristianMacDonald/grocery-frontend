import Item from './Item.jsx';

function ItemList(props) {
  return (
      <div className="ItemList">
        {props.items.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            price={item.price}
            description={item.description}
            onClick={() => props.onItemClick(item)}
          />
        ))}
      </div>
  );
}

export default ItemList;