import React from "react";
import './Header.css'
import Logo from "../Logo/Logo";
import Basket from "../Basket/Basket";


function Header() {
    return(
        <div className="header-wrapper">
            <Logo />
            <Basket />
        </div>
    )
}

export default Header