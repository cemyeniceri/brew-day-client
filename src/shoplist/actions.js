import axiosInstance from "../common/axiosInstance";
import {browserHistory} from "react-router"
import  {
    BASE_URL,
    SHOW_SUCCESS_ALERT,
    SHOW_CONFIRMATION_DIALOG,
    HIDE_CONFIRMATION_DIALOG,
    /* TYPES */
    TYPE_SHOP_LIST,
    TYPE_INGREDIENT,
    /* Shop List Part */
    RECEIVE_SHOP_LISTS,
    RECEIVE_SHOP_LIST,
    RECEIVE_SHOP_LIST_FOR_UPDATE,
    SHOP_LIST_UPDATE_START,
    SHOP_LIST_CREATE_START,
    CLEAR_SELECTED_SHOP_LIST,
/* Ingredient Part */
    RECEIVE_SHOP_LIST_INGREDIENTS,
    SHOP_LIST_INGREDIENT_UPDATE_START,
    SHOP_LIST_INGREDIENT_CREATE_START,
    CLEAR_SAVING_SHOP_LIST_INGREDIENT
} from '../constants'

import {
    /* Shop List Messages */
    SHOP_LIST_CREATE_SUCCESS,
    SHOP_LIST_UPDATE_SUCCESS,
    SHOP_LIST_DELETE_SUCCESS,
    QUESTION_DELETE_SHOP_LIST,
    /* Ingredient Messages */
    SHOP_LIST_INGREDIENT_CREATE_SUCCESS,
    SHOP_LIST_INGREDIENT_UPDATE_SUCCESS,
    SHOP_LIST_INGREDIENT_DELETE_SUCCESS,
    QUESTION_DELETE_SHOP_LIST_INGREDIENT
} from '../constants/message'


// SHOP-LIST OPERATIONS :
export const fetchShopLists = () => dispatch => {
    axiosInstance.get(BASE_URL + 'shop-lists')
        .then((response)=> {
            dispatch({ type: RECEIVE_SHOP_LISTS, payload: response.data});
    });
};

export const fetchShopList = (objId) => dispatch => {
    axiosInstance.get(BASE_URL + 'shop-lists/' + objId)
        .then((response)=> {
        dispatch(fetchIngredient(objId));
        dispatch({ type: RECEIVE_SHOP_LIST, payload: response.data});
    });
};

export const fetchShopListForShopListUpdate = (objId) => dispatch => {
    axiosInstance.get(BASE_URL + "shop-lists/" + objId)
        .then((response)=> {
            dispatch({ type: RECEIVE_SHOP_LIST_FOR_UPDATE, payload: response.data});
        });
};

export const createShopList = (shopList) => dispatch => {
    axiosInstance.post(BASE_URL + 'shop-lists', JSON.stringify(shopList))
        .then(() => {
            dispatch({type: CLEAR_SELECTED_SHOP_LIST});
            dispatch({type: SHOW_SUCCESS_ALERT, payload: SHOP_LIST_CREATE_SUCCESS});
            browserHistory.push('/shop-lists');
    });
};

export const updateShopList = (shopList) => dispatch => {
    axiosInstance.put(BASE_URL + 'shop-lists', JSON.stringify(shopList))
        .then(() => {
            dispatch({type: SHOW_SUCCESS_ALERT, payload: SHOP_LIST_UPDATE_SUCCESS});
            dispatch(fetchShopList(shopList.objId));
            browserHistory.push('/shop-lists');
    });
};

export const updateShopListStart = () => dispatch => {
    dispatch({ type: SHOP_LIST_UPDATE_START });
};

export const createShopListStart = () => dispatch => {
    dispatch({ type: SHOP_LIST_CREATE_START });
};

export const deleteShopList = (objId) => dispatch => {
    axiosInstance.delete(BASE_URL + 'shop-lists/' + objId)
        .then(() => {
            dispatch(fetchShopLists());
            dispatch({type: CLEAR_SELECTED_SHOP_LIST});
            dispatch({type: SHOW_SUCCESS_ALERT, payload: SHOP_LIST_DELETE_SUCCESS});
            dispatch({type: HIDE_CONFIRMATION_DIALOG});
    })
};

export const askForDeleteShopList = (objId) => dispatch => {
    dispatch({ type: SHOW_CONFIRMATION_DIALOG, message: QUESTION_DELETE_SHOP_LIST, confirmationParameters: {type: TYPE_SHOP_LIST, objId: objId}});
};


// INGREDIENTS OPERATIONS :
export const fetchIngredient = (shopListObjId) => dispatch => {
    axiosInstance.get(BASE_URL + 'shop-lists/' + shopListObjId + '/ingredients')
        .then((response)=> {
        dispatch({ type: RECEIVE_SHOP_LIST_INGREDIENTS, payload: response.data});
    });
};

export const startUpdateShopListIngredient = (ingredient) => dispatch => {
    dispatch({ type: SHOP_LIST_INGREDIENT_UPDATE_START, payload: ingredient});
};

export const startCreateShopListIngredient = () => dispatch => {
    dispatch({ type: SHOP_LIST_INGREDIENT_CREATE_START});
};

export const updateShopListIngredient = (shopListObjId, ingredient) => dispatch => {
    axiosInstance.put(BASE_URL + "shop-lists/" + shopListObjId + '/ingredients/', JSON.stringify(ingredient))
        .then(()=> {
            dispatch({type: SHOW_SUCCESS_ALERT, payload: SHOP_LIST_INGREDIENT_UPDATE_SUCCESS});
            dispatch({ type: CLEAR_SAVING_SHOP_LIST_INGREDIENT });
            dispatch(fetchIngredient(shopListObjId));
        });
};

export const createShopListIngredient = (shopListObjId, ingredient) => dispatch => {
    axiosInstance.post(BASE_URL + "shop-lists/" + shopListObjId + '/ingredients/', JSON.stringify(ingredient))
        .then(()=> {
            dispatch({type: SHOW_SUCCESS_ALERT, payload: SHOP_LIST_INGREDIENT_CREATE_SUCCESS});
            dispatch({ type: CLEAR_SAVING_SHOP_LIST_INGREDIENT });
            dispatch(fetchIngredient(shopListObjId));
        });
};

export const cancelFromSaveShopListIngredient = () => dispatch => {
    dispatch({ type: CLEAR_SAVING_SHOP_LIST_INGREDIENT });
};

export const deleteSelectedShopListIngredient = (shopListObjId, objId) => dispatch => {
    axiosInstance.delete(BASE_URL + "shop-lists/" + shopListObjId + '/ingredients/' + objId)
        .then(()=> {
            dispatch({ type: HIDE_CONFIRMATION_DIALOG });
            dispatch({type: SHOW_SUCCESS_ALERT, payload: SHOP_LIST_INGREDIENT_DELETE_SUCCESS});
            dispatch(fetchIngredient(shopListObjId));
        });
};

export const askForDeleteShopListIngredient = (objId) => dispatch => {
    dispatch({ type: SHOW_CONFIRMATION_DIALOG, message: QUESTION_DELETE_SHOP_LIST_INGREDIENT, confirmationParameters: {type: TYPE_INGREDIENT, objId: objId}});
};


// ALL :
export const cancelFromDelete = () => dispatch => {
    dispatch({ type: HIDE_CONFIRMATION_DIALOG });
};

