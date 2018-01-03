import axiosInstance from "../common/axiosInstance";
import { fetchRecipe } from "../recipes/actions";
import { browserHistory } from 'react-router';
import {
    BASE_URL,
    OPEN_BREW_LIST_DIALOG,
    CLOSE_BREW_LIST_DIALOG,
} from "../constants";

export const openTodaysBrewList = () => dispatch => {
    axiosInstance().get(BASE_URL + 'recipes/what-should-i-brew-today')
        .then(response => {
            dispatch({type: OPEN_BREW_LIST_DIALOG, payload: response.data});
        });
};

export const openSelectedRecipe = (objId) => dispatch => {
    dispatch(fetchRecipe(objId));
    browserHistory.push('/recipes');
};

export const closeTodaysBrewList = () => dispatch => {
    dispatch({ type: CLOSE_BREW_LIST_DIALOG });
};