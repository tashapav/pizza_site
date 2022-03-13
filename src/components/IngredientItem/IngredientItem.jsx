import React from "react";
import './IngredientItem.css'
import { useDispatch } from "react-redux";
import { addIngredient, removeIngredient, changeIngredientCheck } from "../../Redux/shoppingSlice";
import MyButton from "../MyButton/MyButton";


function IngredientItem({ingredient}) {

    const dispatch = useDispatch()
    
    function onCrossClick() {
        dispatch(removeIngredient(ingredient)) 
        dispatch(changeIngredientCheck(ingredient))
    }

    function onPlusClick() {
        dispatch(addIngredient(ingredient))
        dispatch(changeIngredientCheck(ingredient))
    }

    return(
        <div className='ingredient-item'>
            <div>
                {ingredient.isChecked ?
                <MyButton color='red' onClick={onCrossClick}>×</MyButton> :
                <MyButton color='green' onClick={onPlusClick}>+</MyButton>}
                <span>{ingredient.title}</span>
            </div>
            <span>{ingredient.price} руб.</span>
        </div>
    )
}

export default IngredientItem