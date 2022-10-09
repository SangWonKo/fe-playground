import React from 'react';
import { connect } from 'react-redux';
import { removeProductFromBasket } from '../store/actions';

// You can use console.log for debugging purposes.

// This component is already implemented and working as expected.
// `Please focus on Redux related parts.
const Basket = ({ products, totalPrice, onRemove }) => {
  // const { products, totalPrice } = useSelector((state) => state.basket);

  return (
    <div>
      <ul className="products">
        {products.map((product) => (
          <li key={product.id} id={`product-${product.id}`}>
            <span>Name: {product.name}</span>
            <span>Quantity: {product.quantity}</span>
            <button
              id={`remove-${product.id}`}
              onClick={() => onRemove(product.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div>
        Total price: <span id="total-price">{totalPrice}</span>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    products: state.basket.products,
    totalPrice: state.basket.totalPrice,
  };
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch);
  return {
    onRemove: (productId) => {
      dispatch(removeProductFromBasket(productId));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
