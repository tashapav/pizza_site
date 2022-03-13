import React from "react";
import './PersonalPizza.css'
import IngredientItem from "../IngredientItem/IngredientItem";
import MyButton from "../MyButton/MyButton";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AllIngredientsUnchecked, makePizza } from "../../Redux/shoppingSlice";


function PersonalPizza() {

    const dispatch = useDispatch()
    const ingredientsData = useSelector(state => state.shopping.ingredients)

    function makePizzaFull() {
        dispatch(makePizza())
        dispatch(AllIngredientsUnchecked())
    }

    return(
        <div className="personal-pizza">
            <h1 className="personal-pizza__main-text">Соберите пиццу сами, а мы её приготовим.</h1>
            <span>Выберите ингредиенты:</span>
            <div className="ingredient-list">
                {ingredientsData.map(ingredient => <IngredientItem key={ingredient.id} ingredient={ingredient} />)}
            </div>
            <MyButton color={'green'} onClick={makePizzaFull}>Собрать пиццу</MyButton>
        </div>
    )
}

export default PersonalPizza