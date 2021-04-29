import Carousel2 from '../components/Foodie/Carousel2';
import FoodieProvider from '../context/Foodie/FoodieProvider';

const Workouts = () => {
  return (
    <FoodieProvider>
      <Carousel2 />
    </FoodieProvider>
  );
};

export default Workouts;
