import { createContext } from 'react';
import useFoodieSearch from '../../hooks/useFoodieSearch';

export const FoodieContext = createContext();

const FoodieProvider = ({ children }) => {
  const [state, fetchData] = useFoodieSearch();

  const handleFetch = (searchQuery) => {
    fetchData(searchQuery);
  };

  return (
    <FoodieContext.Provider value={{ handleFetch, fetchedData: state }}>
      {children}
    </FoodieContext.Provider>
  );
};

export default FoodieProvider;
