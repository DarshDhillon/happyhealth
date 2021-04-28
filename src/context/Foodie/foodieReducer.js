const foodieReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_LOADING':
      return { ...state, recipes: payload, loading: true };
    default:
      return state;
  }
};

export default foodieReducer;
