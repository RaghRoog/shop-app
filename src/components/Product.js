import React, {useState} from "react";
import style from '../styles/product.css'
import addingToCart from '../components/addingToCart.js'

let Product = ({product}) => {

    return(
        <div className="product-page">
            <div className="product-displayer">
                <div style={{backgroundImage: `url(./product-imgs/${product.img})`}} className="product-img"></div>
                <div className="product-info">
                    <div className="product-name">{product.productName}</div>
                    <div className="to-cart-container">
                        <div>{`$${product.price}`}</div>
                        <div className="to-cart" onClick={()=>{
                             addingToCart(product)
                        }}>To cart</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product



