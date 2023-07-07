import React from "react";
import {BsCartCheck} from "react-icons/bs";


function CartButton() {
    return (
        <button type="button" className="cart__button">
            <button className="btn_cart"><BsCartCheck/>
            <span className="cart-status">1</span>
            </button>
        </button>
    )
}

export default CartButton;