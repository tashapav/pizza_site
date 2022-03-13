import { createSlice } from "@reduxjs/toolkit";
import ingredientsData from "../assets/ingredientsDataFromServer";

const shoppingSlice = createSlice({
    name:'shopping',
    initialState: {
        pizzaIdCount: 0,
        personalPizzaIdCount: 0,
        ingredients: ingredientsData,
        pizzaBasket: [],
        pizzaPrice: 0,
        basketIsOpen: false,
        personalPizzaBasket: [],
        personalPizzaItem: [],
        personalPizzaItemPrice: 0
    },
    reducers: {
        addPizza(state, action) {
            state.pizzaBasket.push({id: state.pizzaIdCount, pizza: action.payload})
            state.pizzaIdCount += 1
            state.pizzaPrice = state.pizzaPrice + action.payload.price
        },
        removePizza(state, action) {
            state.pizzaBasket = state.pizzaBasket.filter(pizza => pizza.id !== action.payload.id)
            state.pizzaPrice = state.pizzaPrice - action.payload.pizza.price
        },
        changeBasketIsOpen(state, action) {
            state.basketIsOpen = !state.basketIsOpen
        },
        addIngredient(state, action) {
            state.personalPizzaItem.push(action.payload)
            state.personalPizzaItemPrice += action.payload.price
        },
        removeIngredient(state, action) {
            state.personalPizzaItem = state.personalPizzaItem.filter(ingredient => ingredient.id !== action.payload.id)
            state.personalPizzaItemPrice -= action.payload.price
        },
        makePizza(state, action) {
            if (state.personalPizzaItem.length >= 1) {
                state.personalPizzaBasket.push({id: state.personalPizzaIdCount, item: state.personalPizzaItem, price: state.personalPizzaItemPrice})
                state.personalPizzaIdCount += 1
                state.pizzaPrice += state.personalPizzaItemPrice
                state.personalPizzaItem = []
                state.personalPizzaItemPrice = 0
            }
        },
        removePersonalPizza(state, action) {
            state.personalPizzaBasket = state.personalPizzaBasket.filter(pizza => pizza.id !== action.payload.id)
            state.pizzaPrice -= action.payload.price
        },
        changeIngredientCheck(state, action) {
            state.ingredients.forEach(ingredient => {
                if (ingredient.id === action.payload.id) {
                    ingredient.isChecked = !ingredient.isChecked
                }
            })
        },
        AllIngredientsUnchecked(state, action) {
            state.ingredients = state.ingredients.map(ingredient => {
                return {...ingredient, isChecked: false}})
        },
        makeAnOrder(state, action) {
            //...
            state.personalPizzaBasket = []
            state.pizzaBasket = []
            state.pizzaPrice = 0
            state.personalPizzaIdCount = 0
            state.pizzaIdCount = 0
        }
    }
})

export const {addPizza, removePizza, changeBasketIsOpen, addIngredient, removeIngredient, makePizza, changeIngredientCheck, AllIngredientsUnchecked, removePersonalPizza, makeAnOrder} = shoppingSlice.actions
export default shoppingSlice.reducer