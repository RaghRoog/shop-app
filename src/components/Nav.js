import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from '../styles/nav.css'
import bag from '../imgs/bag.png'
import logo from '../imgs/logo.png'

const Nav = () => {
    
    function cartDisplayBlock() {
        let cart = document.querySelector('.cart')
        cart.style.display = 'block'
        let bag = document.querySelector('.bag')
        bag.style.display = 'none'
    }

    return(
        <div>
            <div className="navbar">
                <div className="logo-container">
                    <img className="logo" src={logo} alt="logo" />
                    <Link to='/'>
                        <div className="store-name">Console World</div>
                    </Link>
                </div>  
                <nav>
                    <ul>
                    <Link  to='/'>
                        <li>Home</li>
                    </Link>
                    <Link  to='/shop'>
                        <li>Shop</li>
                    </Link>    
                        <li onClick={cartDisplayBlock}><img className="bag" src={bag} alt="your bag"/></li>
                        <div className="in-cart-displayer">0</div>   
                    </ul>         
                </nav>
            </div>
        </div>
    );
}

export default Nav;