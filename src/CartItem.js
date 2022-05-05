import React from 'react'
import './CartItem.css'
import { useStateValue } from './StateProvider'
import { Flipped } from 'react-flip-toolkit'

function CartItem({key, id, title, image, price, rating}) {
    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

  return (
    <Flipped flipId={key} key={key}>
        <div className="cart_item">
            <div className="cart_img_box">        
                <img className="cart_item_img" src={image} alt="cart_item"/>
            </div>
            <div className="cart_item_head">
                <div className="cart_item_info">
                    <p>{title}</p>
                    <p className="cart_item_price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                
                    <div className="cart_item_rating">
                        {Array(rating).fill().map((_, i)=> {
                        return <img className="cart_item_star" src="/img/star.png" alt="star"/>
                        })}
                    </div>
                </div>
                <button onClick={removeFromCart}>Remove Item</button>
            </div>
        </div>
    </Flipped>
  )
}

export default CartItem