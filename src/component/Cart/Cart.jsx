import React from 'react';
import './Cart.css';

const Cart = (props) => {
  //const cart = props.cart;
  const {cart} = props;

  let total = 0;
  for(const product of cart){
    total = total + product.price;
  }

  return (
    <div className='cart'>
      <h2>Order Summary</h2>
<h2>Selected Items: {cart.length}</h2>
<p>Total Price: {total} </p>
<p>Total Shipping: </p>
<p>Tax: </p>
<h6>Grand Total:</h6>
    </div>
    
  );
};

export default Cart;