import React from 'react'
import './Cart.css'
import Subtotal from './Subtotal.js'
import CartItem from './CartItem.js'
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';

function Cart() {
    const [{cart, user}, dispatch] = useStateValue();

  return (
    <div className="cart">
        <div className="cart_left">
            <img className="cart_ad" src="/img/cartad.png"></img>
            <div className="cart_title">
                <h3>Hello, {user?.email}</h3>
                <h2>Your Shopping Cart</h2>
            </div>
            {cart.map((item)=> (
               <CartItem id={item.id} title={item.title} image={item.image}
               price={item.price} rating={item.rating}/>
            ))}
        </div>

        <div className="cart_right">
            <Subtotal cart={cart} total={getCartTotal(cart)}/>
        </div>

    </div>
  )
}


export default Cart