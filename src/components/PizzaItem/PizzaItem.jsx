import React from "react";
import { useDispatch } from "react-redux";
import { addPizza } from "../../Redux/shoppingSlice";
import './PizzaItem.css'
import MyButton from "../MyButton/MyButton";

function PizzaItem({pizza}) {

    const dispatch = useDispatch()
    
    return(
        <div className="pizza-item-wrapper">
            <img className="pizza-img" src={pizza.img} alt='pizza'/>
            <span className="pizza-title">{pizza.title}</span>
            <span className="pizza-price">{pizza.price} руб.</span>
            <MyButton color={'green'} onClick={() => dispatch(addPizza(pizza))}>В корзину</MyButton>
        </div>
    )
}

export default PizzaItem