import { createContext, useReducer } from 'react';
import shopReducer from './shopReducer';
import shopProducts from '../../data/Shop/shopProducts';
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const initialState = {
    items: [],
  };

  const [state, dispatch] = useReducer(shopReducer, initialState);

  const handleAddOneItem = (item) => {
    dispatch({
      type: 'ADD_ADDITIONAL_ITEM',
      payload: item,
    });
  };

  const handleRemoveOneItem = (item) => {
    dispatch({
      type: 'REMOVE_ONE_ITEM',
      payload: item,
    });
  };

  return (
    <ShopContext.Provider
      value={{
        shopProducts,
        handleAddOneItem,
        handleRemoveOneItem,
        basketItems: state.items,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
