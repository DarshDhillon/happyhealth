import { useContext } from 'react';
import { FoodieContext } from '../../context/Foodie/FoodieProvider';
import Carousel from 'react-elastic-carousel';
import RecipeCard from './RecipeCard';

const Carousel2 = () => {
  const { fetchedData } = useContext(FoodieContext);

  const { recipes } = fetchedData;

  return (
    <>
      {recipes.length > 0 && (
        <Carousel>
          {recipes.map((recipe) => (
            <RecipeCard recipe={recipe} />
          ))}
        </Carousel>
      )}
    </>
  );
};

export default Carousel2;
