const shopReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_ADDITIONAL_ITEM':
      const matchedItem = state.items.find((item) => item.id === payload.id);

      if (!matchedItem) {
        return {
          items: [...state.items, { ...payload, quantity: 1 }],
        };
      }

      return {
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
          items: [...state.items.filter((item) => item.id !== payload.id)],
        };
      }

      return {
        items: [
          ...state.items.map((item) => {
            if (item.id === payload.id) {
              return { ...item, quantity: item.quantity-- };
            }
            return item;
          }),
        ],
      };

    default:
      return state;
  }
};

export default shopReducer;

// case 'ADD_ITEM':
//   const existingItem = state.items.find((item) => item.id === payload.id);

//   if (existingItem) {
//     const newArray = state.items.filter(
//       (item) => item.id !== existingItem.id
//     );
//     return {
//       items: [
//         ...newArray,
//         { ...existingItem, quantity: existingItem.quantity++ },
//       ],
//     };
//   }

//   return {
//     items: [...state.items, { ...payload, quantity: 1 }],
//   };

// case 'DELETE_ITEM':
//   const matchedItem = state.items.find((item) => item.id === payload.id);

//   if (matchedItem.quantity === 0) {
//     const filteredArray = state.items.filter(
//       (item) => item.id !== matchedItem.id
//     );
//     return {
//       items: [...filteredArray],
//     };
//   } else {
//     const filteredArray = state.items.filter(
//       (item) => item.id !== matchedItem.id
//     );
//     return {
//       items: [
//         ...filteredArray,
//         { ...matchedItem, quantity: matchedItem.quantity-- },
//       ],
//     };
//   }
