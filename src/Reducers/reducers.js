const initialstate = {
  data: [],
  loading: false,
  error: null,
};

export const Reducers = (state = initialstate, action) => {
  switch (action.type) {
    case "GET_DATA_REQUEST":
      return { ...state, loading: true };
    case "GET_DATA_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_DATA_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "POST_DATA_REQUEST":
      return { ...state, loading: true };
    case "POST_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload],
      };
    case "POST_DATA_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
