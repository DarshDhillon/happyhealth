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
    case 'ERROR':
      return {
        ...state,
        loading: false,
        errorData: {
          isError: true,
          catchedError: payload,
        },
      };
    default:
      return state;
  }
};

export default foodieReducer;
