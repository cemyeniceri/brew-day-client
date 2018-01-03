import axiosInstance from "../common/axiosInstance";
import {browserHistory} from "react-router"
import  {
    BASE_URL,
    SHOW_SUCCESS_ALERT,
    SHOW_CONFIRMATION_DIALOG,
    HIDE_CONFIRMATION_DIALOG,
    RECEIVE_INGREDIENTS,
    RECEIVE_INGREDIENT,
    INGREDIENT_UPDATE_START,
    INGREDIENT_CREATE_START
} from '../constants'

import  {
    INGREDIENT_CREATE_SUCCESS,
    INGREDIENT_UPDATE_SUCCESS,
    INGREDIENT_DELETE_SUCCESS,
    QUESTION_DELETE_INGREDIENT
} from '../constants/message'

export const fetchIngredients = () => dispatch => {
    axiosInstance().get(BASE_URL + 'ingredients')
        .then((response)=> {
        dispatch({type: RECEIVE_INGREDIENTS, payload: response.data})
    });
};

export const fetchIngredient = (objId) => dispatch => {
    axiosInstance().get(BASE_URL + "ingredients/" + objId)
        .then((response)=> {
            dispatch({type: RECEIVE_INGREDIENT, payload: response.data})
        });
};

export const createIngredient = (ingredient) => dispatch => {
    axiosInstance().post(BASE_URL + 'ingredients', JSON.stringify(ingredient))
        .then(() => {
        dispatch({type: SHOW_SUCCESS_ALERT, payload: INGREDIENT_CREATE_SUCCESS});
        browserHistory.push('/ingredients');
    });
};

export const updateIngredient = (ingredient) => dispatch => {
    axiosInstance().put(BASE_URL + 'ingredients', JSON.stringify(ingredient))
        .then(() => {
        dispatch({type: SHOW_SUCCESS_ALERT, payload: INGREDIENT_UPDATE_SUCCESS});
        browserHistory.push('/ingredients');
    });
};

export const deleteIngredient = (objId) => dispatch => {
    axiosInstance().delete(BASE_URL + 'ingredients/' + objId)
        .then(() => {
        dispatch(fetchIngredients());
        dispatch({type: HIDE_CONFIRMATION_DIALOG});
        dispatch({type: SHOW_SUCCESS_ALERT, payload: INGREDIENT_DELETE_SUCCESS});
    })
};

export const createIngredientStart = () => dispatch => {
    dispatch({ type: INGREDIENT_CREATE_START });
};

export const updateIngredientStart = () => dispatch => {
    dispatch({ type: INGREDIENT_UPDATE_START });
};

export const cancelFromDelete = () => dispatch => {
    dispatch({ type: HIDE_CONFIRMATION_DIALOG });
};

export const askForDelete = (objId) => dispatch => {
    dispatch({ type: SHOW_CONFIRMATION_DIALOG, message: QUESTION_DELETE_INGREDIENT, confirmationParameters: objId});
};