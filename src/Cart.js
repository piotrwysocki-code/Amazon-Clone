import React from 'react'
import './Cart.css'
import Subtotal from './Subtotal.js'
import CartItem from './CartItem.js'
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';
import { Flipped, Flipper } from 'react-flip-toolkit'
import { AnimatedList } from 'react-animated-list';


function Cart() {
    const [{cart, user}, dispatch] = useStateValue();

  return (
    <div className="cart">{}
        <div className="cart_left">
            <img className="cart_ad" src="/img/cartad.png"></img>
            <div className="cart_title">
                <h3>Hello, {user?.email}</h3>
                <h2>Your Shopping Cart</h2>
            </div>
            <Flipper flipKey={cart.length}>
                <div className="flipper">
                    {cart.map((item)=> (
                        <CartItem key={item.key} id={item.id} title={item.title} image={item.image}
                            price={item.price} rating={item.rating}/>
                    ))}
                </div>
            </Flipper>
        </div>
        <div className="cart_right">
            <Subtotal />
        </div>
    </div>
  )
}


export default Cart