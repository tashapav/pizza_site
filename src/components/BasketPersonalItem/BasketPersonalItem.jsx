import React from "react";
import MyButton from "../MyButton/MyButton";
import { useDispatch } from "react-redux";
import { removePersonalPizza } from "../../Redux/shoppingSlice";
import './BasketPersonalItem.css'


function BasketPersonalItem({pizza}) {

    const dispatch = useDispatch()

    return(
        <div className="basket-item">
            <span className="lines-space">Пицца: {pizza.item.map(item => <span className="pizza-ingredient" key={item.id}>{item.title} </span>)}</span> 
            <div className="basket-item__second">
                <span>{pizza.price}руб.</span>
                <MyButton color={'red'} onClick={() => dispatch(removePersonalPizza(pizza))}>×</MyButton>
            </div>
        </div>
    )
}

export default BasketPersonalItem