import { createContext, useReducer } from 'react';
import shopReducer from './shopReducer';
import shopProducts from '../../data/Shop/shopProducts';
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const initialState = {
    items: [],
  };

  const handleBuy = (itemID) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: shopProducts.find((item) => item.id === itemID),
    });
  };

  const [state, dispatch] = useReducer(shopReducer, initialState);
  return (
    <ShopContext.Provider
      value={{ shopProducts, handleBuy, basketItems: state.items }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
