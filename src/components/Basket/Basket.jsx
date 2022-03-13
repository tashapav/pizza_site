import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiShoppingCart } from 'react-icons/fi';
import './Basket.css'
import {changeBasketIsOpen} from "../../Redux/shoppingSlice";


function Basket() {

    const price = useSelector(state => state.shopping.pizzaPrice)
    const dispatch = useDispatch()
    
    return(
        <div className="basket">
            <span>Чтобы просмотреть заказ, кликните на корзину →  </span>
            <FiShoppingCart className="basket__logo" onClick={() => dispatch(changeBasketIsOpen())}/>
            <span className="basket__price">{price}p</span>
        </div>
    )
}

export default Basket