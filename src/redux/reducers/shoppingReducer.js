import actionTypes from '../actions/shoppingActionTypes';

const initialState = {
  products: [
    {
      id: 1,
      title: 'COOLEST Cube Ever',
      description:
        'This cube will keep you busy the entire day and it is very fun to play with',
      price: 15.0,
      image:
        'https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      id: 2,
      title: 'Large Coffee Cup',
      description:
        'Get a big cup of coffee every morning before the day starts',
      price: 20.0,
      image:
        'https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
      id: 3,
      title: 'Books That Changed Life',
      description:
        'These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people',
      price: 150.0,
      image:
        'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80',
    },
  ],
  cart: [],
  currentItem: null,
};

const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      // getting item
      const item = state.products.find(
        (product) => product.id === action.payload.itemId
      );
      //checking if item already in cart
      const inCart = state.cart.find((cartItem) => cartItem.id === item.id)
        ? true
        : false;
      // adding item depending on if item already in cart or not
      return {
        ...state,
        cart: inCart
          ? state.cart.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
          : [...state.cart, { ...item, quantity: 1 }],
      };
    case actionTypes.REMOVE_iTEM:
      // removing item from cart
      return {
        ...state,
        cart:
          state.cart.length === 1
            ? []
            : state.cart.filter(
                (cartItem) => cartItem.id === action.payload.itemId
              ),
      };
    case actionTypes.ADDJUST_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.itemId
            ? { ...item, quantity: Number(action.payload.adjustedQuantity) }
            : item
        ),
      };
    default:
      return state;
  }
};

export default shoppingReducer;
