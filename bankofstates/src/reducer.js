export const initialState = {
  cart: [],
  userInfo: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, userInfo: action.item };
    case "UPDATE":
      return { ...state, userInfo: action.item };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_TO_CART":
      return { state };
    case "LOGOUT":
      return { ...state, userInfo: action.item };
    default:
      return state;
  }
};

export default reducer;
