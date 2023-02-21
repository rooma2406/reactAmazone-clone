import React from 'react';
import './Product.css';

function Product(id, title1, image, price, rating) {
  return (
    
    <div className='product'>
        <p>{Product.title}</p>
        <p className='product_price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <img src='{image}' alt=''/>
        <button>Add to basket</button>
        


    </div>
  );
}

export default Product