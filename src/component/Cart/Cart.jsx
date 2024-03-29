import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = ({cart, handleClearCart, children}) => {
  //const cart = props.cart;
  //const {cart} = props;

  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for(const product of cart){
    if(product.quantity === 0){
      product.quantity = 1;
    }
    
    //product.quantity = product.quantity || 1;

    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (total * 0.07).toFixed(2);
  const grandTotal = total + totalShipping + parseFloat(tax);

  return (
    <div className='cart'>
      <h2>Order Summary</h2>
<h2>Selected Items: {quantity}</h2>
<p>Total Price: {total} </p>
<p>Total Shipping: {totalShipping}</p>
<p>Tax: {tax}</p>
<h6>Grand Total: {grandTotal}</h6>
<button onClick={handleClearCart} className='btn-clear-cart'><span>Clear Cart</span><FontAwesomeIcon icon={faTrashAlt} /></button>
{children}
    </div>
    
  );
};

export default Cart;