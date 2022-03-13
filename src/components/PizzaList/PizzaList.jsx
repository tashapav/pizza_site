import React from "react";
import './PizzaList.css'
import PizzaItem from "../PizzaItem/PizzaItem";
import pizzaData from "../../assets/pizzaDataFromServer";

function PizzaList() {
    return(
        <div className="pizza-list">
            {pizzaData.map(pizza => <PizzaItem key={pizza.id} pizza={pizza}/>)}
        </div>
    )
}

export default PizzaList