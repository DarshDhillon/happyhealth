import { createContext, useReducer } from 'react';
import shopReducer from './shopReducer';
import shopProducts from '../../data/Shop/shopProducts';
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const initialState = {
    items: [],
    showCheckout: false,
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

  const handleShowCheckout = () => {
    dispatch({
      type: 'SHOW_CHECKOUT',
    });
  };

  return (
    <ShopContext.Provider
      value={{
        shopProducts,
        handleShowCheckout,
        handleAddOneItem,
        handleRemoveOneItem,
        basketItems: state.items,
        showCheckout: state.showCheckout,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
