import React from 'react';
import './Cart.css';

const Cart = (props) => {
  //const cart = props.cart;
  const {cart} = props;

  let total = 0;
  let totalShipping = 0;
  for(const product of cart){
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;
   
  }
  const tax = (total * 0.07).toFixed(2);
  const grandTotal = total + totalShipping + parseFloat(tax);

  return (
    <div className='cart'>
      <h2>Order Summary</h2>
<h2>Selected Items: {cart.length}</h2>
<p>Total Price: {total} </p>
<p>Total Shipping: {totalShipping}</p>
<p>Tax: {tax}</p>
<h6>Grand Total: {grandTotal}</h6>
    </div>
    
  );
};

export default Cart;