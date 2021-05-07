const shopReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find((item) => item.id === payload.id);

      if (existingItem) {
        const newArray = state.items.filter(
          (item) => item.id !== existingItem.id
        );
        return {
          items: [
            ...newArray,
            { ...existingItem, quantity: existingItem.quantity++ },
          ],
        };
      }

      return {
        items: [...state.items, { ...payload, quantity: 1 }],
      };

    case 'DELETE_ITEM':
      return {
        items: [...state.items.filter((item) => item.id !== payload)],
      };
    default:
      return state;
  }
};

export default shopReducer;
