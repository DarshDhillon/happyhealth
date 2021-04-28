import { createContext, useReducer } from 'react';
import foodieReducer from './foodieReducer';
import axios from 'axios';
export const FoodieContext = createContext();

const ID = process.env.REACT_APP_EDAMAM_APPLICATION_ID;
const KEY = process.env.REACT_APP_EDAMAN_APPLICATION_KEY;

const FoodieProvider = ({ children }) => {
  const initialState = {
    loading: false,
    recipes: [],
  };

  const [state, dispatch] = useReducer(foodieReducer, initialState);

  const handleFetch = (searchQuery) => {
    dispatch({ type: 'IS_LOADING' });

    const fetchData = async () => {
      await axios
        .get(
          `https://api.edamam.com/search?q=${searchQuery}&app_id=${ID}&app_key=${KEY}
      `
        )
        .then(({ data }) => {
          console.log(data);
          dispatch({ type: 'FETCH_DATA', payload: data.hits });
        })
        .catch((error) => console.error(error));
    };

    fetchData();
  };

  return (
    <FoodieContext.Provider value={{ handleFetch, apiData: state }}>
      {children}
    </FoodieContext.Provider>
  );
};

export default FoodieProvider;
