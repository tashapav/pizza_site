import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import './Body.css'
import PizzaList from "../PizzaList/PizzaList";
import PersonalPizza from "../PersonalPizza/PersonalPizza";


function Body() {
    return(
        <div className="body-wrapper">
            <nav className="pizza-type-nav">
                <NavLink to="/pizza_site/">Меню</NavLink>
                <NavLink to="/pizza_site/ownpizza">Собери пиццу</NavLink>
            </nav>
            
            <Routes>
                    <Route path="/pizza_site/" element={<PizzaList />} />
                    <Route path="/pizza_site/ownpizza" element={<PersonalPizza />} />
            </Routes>
        </div>
    )
}

export default Body