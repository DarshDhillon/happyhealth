const shopReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_ADDITIONAL_ITEM':
      const matchedItem = state.items.find((item) => item.id === payload.id);
      const randomOrderNumber = `${Math.floor(
        Math.random() * 10000
      )} - ${Math.floor(Math.random() * 1000)}`;

      if (!matchedItem) {
        return {
          ...state,
          items: [...state.items, { ...payload, quantity: 1 }],
          checkoutOrderNumber: randomOrderNumber,
        };
      }

      return {
        ...state,
        items: [
          ...state.items.map((item) => {
            if (item.id === payload.id) {
              return { ...item, quantity: item.quantity++ };
            }
            return item;
          }),
        ],
      };

    case 'REMOVE_ONE_ITEM':
      if (payload.quantity === 0) {
        return {
          ...state,
          items: [...state.items.filter((item) => item.id !== payload.id)],
        };
      }

      return {
        ...state,
        items: [
          ...state.items.map((item) => {
            if (item.id === payload.id) {
              return { ...item, quantity: item.quantity-- };
            }
            return item;
          }),
        ],
      };

    case 'SHOW_CHECKOUT':
      return {
        ...state,
        showCheckout: true,
      };

    case 'SHOW_CHECKOUT_MODAL':
      return {
        ...state,
        showCheckoutModal: true,
      };

    case 'ADD_TRANSACTION_INFO':
      return {
        ...state,
        transactionInfo: { ...payload },
      };

    default:
      return state;
  }
};

export default shopReducer;
