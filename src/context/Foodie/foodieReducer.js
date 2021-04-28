const foodieReducer = (state, { type, payload }) => {
  switch (type) {
    case 'IS_LOADING':
      return { ...state, loading: true };
    case 'FETCH_DATA':
      return { ...state, loading: false, recipes: [...payload] };
    default:
      return state;
  }
};

export default foodieReducer;
