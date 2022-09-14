export const initalState = {
  cart: [],
  //user: null,
};

//Calculates the total items in the cart
export const getCartTotal = (cart) => {
  cart?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  //debug action
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "DELETE_FROM_CART":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      let newCart = [...state.cart];
      if (index >= 0) {
        //CHOP THE ARRAY BY 1
        newCart.splice(index, 1);
      } else {
        console.alert(
          `Cant Remove Product ${action.id} as its not in the Cart!🛒`
        );
      }

      return {
        ...state,
        cart: newCart,
      };
    default:
      return state;
  }
};

export default reducer;