import { createContext, useReducer } from 'react';
import shopReducer from './shopReducer';
import shopProducts from '../../data/Shop/shopProducts';
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const initialState = {
    items: [],
    showCheckout: false,
    showCheckoutModal: false,
    checkoutOrderNumber: '',
    transactionInfo: {},
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

  const handleShowCheckoutModal = () => {
    dispatch({
      type: 'SHOW_CHECKOUT_MODAL',
    });
  };

  const handleSubmitTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION_INFO',
      payload: transaction,
    });
  };

  return (
    <ShopContext.Provider
      value={{
        shopProducts,
        handleShowCheckoutModal,
        handleShowCheckout,
        handleAddOneItem,
        handleRemoveOneItem,
        handleSubmitTransaction,
        basketItems: state.items,
        showCheckout: state.showCheckout,
        showCheckoutModal: state.showCheckoutModal,
        checkoutOrderNumber: state.checkoutOrderNumber,
        transactionInfo: state.transactionInfo,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
