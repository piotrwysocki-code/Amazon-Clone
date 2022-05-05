import React from 'react'
import Cart from './Cart';
import './Product.css';
import { useStateValue } from "./StateProvider"

function Product({key, id, title, image, price, rating}) {
  const [{cart}, dispatch] = useStateValue();
  const generateKey = (pre) => {
      return `${ pre }_${ new Date().getTime() }`;
  }
  
  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item:{
        key: generateKey(id),
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      },
    })
  }

  return (
    <div className="product">
        <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            
            <div className="product_rating">
                {Array(rating).fill().map((_, i)=> {
                   return <img className="product_star" src="/img/star.png" alt="star"/>
                })}
            </div>
        </div>
        <img className="product_img" src={image} alt="product"/>
        <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default Product