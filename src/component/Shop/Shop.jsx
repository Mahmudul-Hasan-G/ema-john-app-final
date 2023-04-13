import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';



const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  
  useEffect( () =>{
   fetch('products.json')
   .then(res => res.json())
   .then(data => setProducts(data))
  }, [])

  useEffect( () =>{
    const storedCart = getShoppingCart();
    const savedCart = [];
    //console.log(storedCart);
    // step 1 : get id
    for(const id in storedCart){
      //step 2 : get product using id
    const addedProduct = products.find(product => product.id ===id);

if(addedProduct){
// step 3: get quantity of the product
const quantity = storedCart[id];
addedProduct.quantity = quantity;
console.log(quantity);
// step 4: add the addedprodutc to the savecart
savedCart.push(addedProduct);
}
console.log(addedProduct);
    }
    //step 5:saved data
    setCart(savedCart);
  } , [products])

  const handleAddToCart = (product) =>{
   const newCart = [...cart, product];
   setCart(newCart);
   addToDb(product.id);
  }
  console.log(cart);
  return (
    <div className='shop-container'>
      <div className='product-container'>
         {
          products.map( product => <Product
          key = {product.id}
          product ={product}
          handleAddToCart ={handleAddToCart}
          ></Product>)
         }
      </div>
      <div className='cart-container'>
          <Cart cart = {cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;