import axiosInstance from "../common/axiosInstance";
import {
    BASE_URL,
    SHOW_SUCCESS_ALERT,
    FETCH_PUBLIC_RECIPES
} from "../constants";
import {RECIPE_IMPORT_SUCCESS} from "../constants/message";

export const fetchPublicRecipes = () => dispatch => {
    axiosInstance().get(BASE_URL + 'public-recipes/')
        .then(response => {
            dispatch({type: FETCH_PUBLIC_RECIPES, payload: response.data});
        });
};

export const importRecipeList = (objId) => dispatch => {
    axiosInstance().post(BASE_URL + 'public-recipes/' + objId)
        .then(() => {
            fetchPublicRecipes();
            dispatch({type: SHOW_SUCCESS_ALERT, payload: RECIPE_IMPORT_SUCCESS});
        });
};