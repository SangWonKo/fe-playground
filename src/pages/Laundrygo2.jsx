import React from 'react';
import { connect } from 'react-redux';
import { addProductToBasket } from '../store/actions';
import Basket from '../components/Basket';

function getSampleProduct() {
  return {
    id: Math.floor(Math.random() * 10000000),
    name: 'product 1',
    quantity: 1,
    price: 1.0,
  };
}

function AddProductComponent({ addProduct }) {
  return (
    <button onClick={() => addProduct(getSampleProduct())}>
      Add product to basket
    </button>
  );
}

const AddProduct = connect(null, (dispatch) => ({
  addProduct: (product) => dispatch(addProductToBasket(product)),
}))(AddProductComponent);

const Laundrygo2 = () => {
  return (
    <div>
      <Basket />
      <AddProduct />
    </div>
  );
};

export default Laundrygo2;
