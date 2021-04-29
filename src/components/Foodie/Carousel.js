import { useState, useContext } from 'react';
import Carousel from 'react-elastic-carousel';
import FoodieContext from '../../context/Foodie/FoodieProvider';
import RecipeCard from './RecipeCard';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const FoodieCarousel = () => {
  const { fetchedData } = useContext(FoodieContext);

  const { recipes } = fetchedData;

  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const addItem = () => {
    const nextItem = Math.max(1, items.length + 1);
    setItems([...items, nextItem]);
  };

  const removeItem = () => {
    const endRange = Math.max(0, items.length - 1);
    setItems(items.slice(0, endRange));
  };

  return (
    <div className='App'>
      <div className='controls-wrapper'>
        <button onClick={removeItem}>Remove Item</button>
        <button onClick={addItem}>Add Item</button>
      </div>
      <hr className='seperator' />
      <div className='carousel-wrapper'>
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FoodieCarousel;
