import { createContext } from 'react';
import useFoodieSearch from '../../hooks/useFoodieSearch';

export const FoodieContext = createContext();

const FoodieProvider = ({ children }) => {
  const [state, fetchData] = useFoodieSearch();

  return (
    <FoodieContext.Provider value={{ fetchData, fetchedData: state }}>
      {children}
    </FoodieContext.Provider>
  );
};

export default FoodieProvider;
