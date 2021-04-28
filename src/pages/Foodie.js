import FoodieMain from '../components/Foodie/FoodieMain';
import FoodieProvider from '../context/Foodie/FoodieProvider';

const Foodie = () => {
  return (
    <FoodieProvider>
      <FoodieMain />
    </FoodieProvider>
  );
};

export default Foodie;
