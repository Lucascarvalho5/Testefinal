import React from "react";
import {BsCartCheck} from "react-icons/bs";
import { Link } from "react-router-dom";



function CartButton() {
    return (
        <div  className="cart__button">
            <button type="submit" to={'/carrinho'} className="btn_cart"><BsCartCheck/>
            <span className="cart-status">1</span>
           
            </button>
        </div>
    )
} 

export default CartButton;