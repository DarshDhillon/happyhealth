import { createContext, useReducer } from 'react';
import shopReducer from './shopReducer';
import shopProducts from '../../data/Shop/shopProducts';
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const initialState = {
    items: [],
  };

  const [state, dispatch] = useReducer(shopReducer, initialState);

  const handleBuy = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const handleDelete = (itemID) => {
    dispatch({
      type: 'DELETE_ITEM',
      payload: itemID,
    });
  };

  return (
    <ShopContext.Provider
      value={{
        shopProducts,
        handleBuy,
        handleDelete,
        basketItems: state.items,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
