const shopReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, payload] };
    default:
      return state;
  }
};

export default shopReducer;
