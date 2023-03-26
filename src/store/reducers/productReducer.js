const initialState = {};

export default (state = initialState, action) => {
  console.log("ACTION", action);

  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
