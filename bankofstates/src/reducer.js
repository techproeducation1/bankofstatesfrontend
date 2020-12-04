export const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      break;
    case "REMOVE_TO_CART":
      break;
    default:
      return state;
  }
}

export default reducer;
