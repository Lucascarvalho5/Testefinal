import React from "react";
import {BsCartCheck} from "react-icons/bs";


function CartButton() {
    return (
        <div  className="cart__button">
            <button className="btn_cart"><BsCartCheck/>
            <span className="cart-status">1</span>
            </button>
        </div>
    )
}

export default CartButton;