import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { makeAnOrder } from "../../Redux/shoppingSlice";
import BasketItem from "../BasketItem/BasketItem";
import MyButton from "../MyButton/MyButton";
import BasketPersonalItem from "../BasketPersonalItem/BasketPersonalItem";
import './BasketList.css'


function BasketList() {

    const dispatch = useDispatch()
    const pizzaBasket = useSelector(state => state.shopping.pizzaBasket)
    const personalPizzaBasket = useSelector(state => state.shopping.personalPizzaBasket)
    const basketIsOpen = useSelector(state => state.shopping.basketIsOpen)

    return(
        <>
        { basketIsOpen ? 
        <div className="basket-list">
            <h2>Ваш заказ:</h2>
            {(pizzaBasket.length + personalPizzaBasket.length) ? 
                <div>
                    {pizzaBasket.map(item => <BasketItem item={item} key={item.id}/>)}
                    {personalPizzaBasket.map(pizza => <BasketPersonalItem key={pizza.id} pizza={pizza}/>)}
                    <div className="order">
                        <MyButton color={'green'} onClick={() => dispatch(makeAnOrder())}>Заказать</MyButton>
                    </div>
                </div> :
                <span>Корзина пуста!</span>
            }
        </div> :
        null
        }
        </>
    )
}

export default BasketList