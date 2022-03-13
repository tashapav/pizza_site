import React from "react";
import { useDispatch } from "react-redux";
import { removePizza } from "../../Redux/shoppingSlice";
import MyButton from "../MyButton/MyButton";
import './BasketItem.css'


function BasketItem({item}) {

    const dispatch = useDispatch()

    return(
        <div className="basket-item">
            <div>{item.pizza.title}</div>
            <div className="basket-item__second">
                <span>{item.pizza.price}руб.</span>
                <MyButton color={'red'} onClick={() => dispatch(removePizza(item))}>×</MyButton>
            </div>
        </div>
        
    )
}

export default BasketItem