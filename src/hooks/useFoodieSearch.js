import { useReducer } from 'react';
import foodieReducer from '../context/Foodie/foodieReducer';
import axios from 'axios';

const ID = process.env.REACT_APP_EDAMAM_APPLICATION_ID;
const KEY = process.env.REACT_APP_EDAMAN_APPLICATION_KEY;

const initialState = {
  loading: false,
  recipes: [],
  count: null,
  errorData: {
    isError: false,
    catchedError: '',
  },
};

const useFoodieSearch = () => {
  const [state, dispatch] = useReducer(foodieReducer, initialState);

  const fetchData = async ({
    searchTerm,
    filterVeg,
    filterLowFat,
    filterHighProtein,
  }) => {
    dispatch({ type: 'IS_LOADING' });

    await axios
      .get(
        `https://api.edamam.com/search?q=${searchTerm}&app_id=${ID}&app_key=${KEY}&from=0&to=30&${filterLowFat}&${filterVeg}&${filterHighProtein}`
      )
      .then(({ data }) => {
        dispatch({ type: 'FETCH_DATA', payload: data });
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        dispatch({ type: 'ERROR', payload: error });
      });
  };

  return [state, fetchData];
};

export default useFoodieSearch;
