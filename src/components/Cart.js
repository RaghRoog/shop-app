import React, { useEffect, useState } from "react";
import style from '../styles/cart.css'

let Cart = () => {
    
    function cartDisplayNone() {
        let cart = document.querySelector('.cart')
        cart.style.display = 'none'
        let bag = document.querySelector('.bag')
        bag.style.display = 'block'
    }

    return(
        <div className="cart">
            <div className="cart-container">
                <div onClick={cartDisplayNone} className="nothing"></div>
                <div className="cart-displayer">
                    <div className="cart-products-container">   
                    </div>
                    <div className="cart-full-price">Add some products to cart</div>
                    <button className="checkout">CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}

export default Cart