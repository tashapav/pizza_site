import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import './Body.css'
import PizzaList from "../PizzaList/PizzaList";
import PersonalPizza from "../PersonalPizza/PersonalPizza";


function Body() {
    return(
        <div className="body-wrapper">
            <nav className="pizza-type-nav">
                <NavLink to="/">Меню</NavLink>
                <NavLink to="/ownpizza">Собери пиццу</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<PizzaList />} />
                <Route path="/ownpizza" element={<PersonalPizza />} />
            </Routes>
        </div>
    )
}

export default Body