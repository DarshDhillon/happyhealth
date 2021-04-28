const foodieReducer = (state, { type, payload }) => {
  switch (type) {
    case 'IS_LOADING':
      return { ...state, loading: true };
    case 'FETCH_DATA':
      return {
        ...state,
        loading: false,
        recipes: [...payload.hits],
        count: payload.count,
      };
    default:
      return state;
  }
};

export default foodieReducer;
