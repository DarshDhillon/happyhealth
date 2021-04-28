import { createContext, useReducer } from 'react';
import foodieReducer from './foodieReducer';

export const FoodieContext = createContext();

const FoodieProvider = ({ children }) => {
  const initialState = {
    loading: false,
    recipes: '',
  };

  const [state, dispatch] = useReducer(foodieReducer, initialState);

  const handleFetch = (searchQuery) => {
    dispatch({ type: 'SET_LOADING', payload: searchQuery });
  };

  return (
    <FoodieContext.Provider value={{ handleFetch, apiData: state }}>
      {children}
    </FoodieContext.Provider>
  );
};

export default FoodieProvider;
