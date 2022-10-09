const initialState = {
  products: [],
  totalPrice: 0,
};

export default function basketReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_BASKET': {
      console.log(action.payload);
      let products = [...state.products];
      const productIdx = products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIdx !== -1) {
        products[productIdx].quantity++;
      } else {
        products = [...products, action.payload];
      }

      console.log(
        products.reduce((acc, cur) => (acc += cur.quantity * cur.price), 0)
      );
      return {
        ...state,
        products: [...products],
        totalPrice: products.reduce(
          (acc, cur) => (acc += cur.quantity * cur.price),
          0
        ),
      };
    }
    case 'REMOVE_PRODUCT_FROM_BASKET': {
      console.log(action.payload);
      let products = [...state.products];
      const productIdx = products.findIndex(
        (product) => product.id === action.payload.productId
      );

      if (productIdx !== -1 && products[productIdx].quantity !== 1) {
        products[productIdx].quantity--;
      } else {
        products = products.filter(
          (product) => product.id !== action.payload.productId
        );
      }
      return {
        ...state,
        products: [...products],
        totalPrice: products.reduce(
          (acc, cur) => (acc += cur.quantity * cur.price),
          0
        ),
      };
    }
    default:
      return state;
  }
}
