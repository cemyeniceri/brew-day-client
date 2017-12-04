import axiosInstance from "../common/axiosInstance";
import {browserHistory} from "react-router"
import  {
    BASE_URL,
    SHOW_SUCCESS_ALERT,
    SHOW_CONFIRMATION_DIALOG,
    HIDE_CONFIRMATION_DIALOG,
    /* TYPES */
    TYPE_RECIPE,
    TYPE_INGREDIENT,
    TYPE_COMMENT,
    /* Recipe Part */
    RECEIVE_RECIPES,
    RECEIVE_RECIPE,
    RECEIVE_RECIPE_FOR_UPDATE,
    RECIPE_UPDATE_START,
    RECIPE_CREATE_START,
    CLEAR_SELECTED_RECIPE,
    CHECK_INGREDIENTS_AVAILABILITY,
    /* Ingredient Part */
    RECEIVE_RECIPE_INGREDIENTS,
    RECIPE_INGREDIENT_UPDATE_START,
    RECIPE_INGREDIENT_CREATE_START,
    CLEAR_SAVING_RECIPE_INGREDIENT,
    /* Comment Part */
    RECEIVE_RECIPE_COMMENTS,
    RECIPE_COMMENT_UPDATE_START,
    RECIPE_COMMENT_CREATE_START,
    CLEAR_SAVING_RECIPE_COMMENT,
} from '../constants'

import {
    /* Recipe Message */
    RECIPE_CREATE_SUCCESS,
    RECIPE_UPDATE_SUCCESS,
    RECIPE_DELETE_SUCCESS,
    QUESTION_DELETE_RECIPE,
    /* Ingredient Message */
    RECIPE_INGREDIENT_CREATE_SUCCESS,
    RECIPE_INGREDIENT_UPDATE_SUCCESS,
    RECIPE_INGREDIENT_DELETE_SUCCESS,
    QUESTION_DELETE_RECIPE_INGREDIENT,
    /* Comment Message */
    COMMENT_CREATE_SUCCESS,
    COMMENT_UPDATE_SUCCESS,
    COMMENT_DELETE_SUCCESS,
    QUESTION_DELETE_COMMENT
} from '../constants/message'


// RECIPE OPERATIONS :
export const fetchRecipes = () => dispatch => {
    axiosInstance.get(BASE_URL + 'recipes')
        .then((response)=> {
            dispatch({ type: RECEIVE_RECIPES, payload: response.data});
    });
};

export const fetchRecipe = (objId) => dispatch => {
    axiosInstance.get(BASE_URL + "recipes/" + objId)
        .then((response)=> {
        dispatch(fetchComments(objId));
        dispatch(fetchIngredient(objId));
        dispatch({ type: RECEIVE_RECIPE, payload: response.data});
    });
};

export const fetchRecipeForRecipeUpdate = (objId) => dispatch => {
    axiosInstance.get(BASE_URL + "recipes/" + objId)
        .then((response)=> {
            dispatch({ type: RECEIVE_RECIPE_FOR_UPDATE, payload: response.data});
        });
};

export const createRecipe = (recipe) => dispatch => {
    axiosInstance.post(BASE_URL + 'recipes', JSON.stringify(recipe))
        .then(() => {
            dispatch({type: CLEAR_SELECTED_RECIPE});
            dispatch({type: SHOW_SUCCESS_ALERT, payload: RECIPE_CREATE_SUCCESS});
            browserHistory.push('/recipes');
    });
};

export const updateRecipe = (recipe) => dispatch => {
    axiosInstance.put(BASE_URL + 'recipes', JSON.stringify(recipe))
        .then(() => {
            dispatch({type: SHOW_SUCCESS_ALERT, payload: RECIPE_UPDATE_SUCCESS});
            dispatch(fetchRecipe(recipe.objId));
            browserHistory.push('/recipes');
    });
};

export const createRecipeStart = () => dispatch => {
    dispatch({ type: RECIPE_CREATE_START });
};

export const updateRecipeStart = () => dispatch => {
    dispatch({ type: RECIPE_UPDATE_START });
};

export const deleteRecipe = (objId) => dispatch => {
    axiosInstance.delete(BASE_URL + 'recipes/' + objId)
        .then(() => {
            dispatch(fetchRecipes());
            dispatch({type: CLEAR_SELECTED_RECIPE});
            dispatch({type: SHOW_SUCCESS_ALERT, payload: RECIPE_DELETE_SUCCESS});
            dispatch({type: HIDE_CONFIRMATION_DIALOG});
    })
};

export const askForDeleteRecipe = (objId) => dispatch => {
    dispatch({ type: SHOW_CONFIRMATION_DIALOG, message: QUESTION_DELETE_RECIPE, confirmationParameters: {type: TYPE_RECIPE, objId: objId}});
};

export const checkForIngredientAvailability = (objId) => dispatch => {
    axiosInstance.get(BASE_URL + "recipes/" + objId + '/check')
        .then((response)=> {
            dispatch({ type: CHECK_INGREDIENTS_AVAILABILITY, payload: response.data});
        });
};

// INGREDIENTS OPERATIONS :
export const fetchIngredient = (recipeObjId) => dispatch => {
    axiosInstance.get(BASE_URL + "recipes/" + recipeObjId + '/ingredients')
        .then((response)=> {
        dispatch({ type: RECEIVE_RECIPE_INGREDIENTS, payload: response.data});
    });
};

export const startUpdateRecipeIngredient = (ingredient) => dispatch => {
    dispatch({ type: RECIPE_INGREDIENT_UPDATE_START, payload: ingredient});
};

export const startCreateRecipeIngredient = () => dispatch => {
    dispatch({ type: RECIPE_INGREDIENT_CREATE_START});
};

export const updateRecipeIngredient = (recipeObjId, ingredient) => dispatch => {
    axiosInstance.put(BASE_URL + "recipes/" + recipeObjId + '/ingredients/', JSON.stringify(ingredient))
        .then(()=> {
            dispatch({type: SHOW_SUCCESS_ALERT, payload: RECIPE_INGREDIENT_UPDATE_SUCCESS});
            dispatch({ type: CLEAR_SAVING_RECIPE_INGREDIENT });
            dispatch(fetchIngredient(recipeObjId));
        });
};

export const createRecipeIngredient = (recipeObjId, ingredient) => dispatch => {
    axiosInstance.post(BASE_URL + "recipes/" + recipeObjId + '/ingredients/', JSON.stringify(ingredient))
        .then(()=> {
            dispatch({type: SHOW_SUCCESS_ALERT, payload: RECIPE_INGREDIENT_CREATE_SUCCESS});
            dispatch({ type: CLEAR_SAVING_RECIPE_INGREDIENT });
            dispatch(fetchIngredient(recipeObjId));
        });
};

export const cancelFromSaveRecipeIngredient = () => dispatch => {
    dispatch({ type: CLEAR_SAVING_RECIPE_INGREDIENT });
};

export const deleteSelectedRecipeIngredient = (recipeObjId, objId) => dispatch => {
    axiosInstance.delete(BASE_URL + "recipes/" + recipeObjId + '/ingredients/' + objId)
        .then(()=> {
            dispatch({ type: HIDE_CONFIRMATION_DIALOG });
            dispatch({type: SHOW_SUCCESS_ALERT, payload: RECIPE_INGREDIENT_DELETE_SUCCESS});
            dispatch(fetchIngredient(recipeObjId));
        });
};

export const askForDeleteRecipeIngredient = (objId) => dispatch => {
    dispatch({ type: SHOW_CONFIRMATION_DIALOG, message: QUESTION_DELETE_RECIPE_INGREDIENT, confirmationParameters: {type: TYPE_INGREDIENT, objId: objId}});
};



// COMMENT OPERATIONS
export const fetchComments = (recipeObjId) => dispatch => {
    axiosInstance.get(BASE_URL + "recipes/" + recipeObjId + '/posts')
        .then((response)=> {
            dispatch({ type: RECEIVE_RECIPE_COMMENTS, payload: response.data});
        });
};

export const startUpdateRecipeComment = (comment) => dispatch => {
    dispatch({ type: RECIPE_COMMENT_UPDATE_START, payload: comment});
};

export const startCreateRecipeComment = () => dispatch => {
    dispatch({ type: RECIPE_COMMENT_CREATE_START});
};

export const updateRecipeComment = (recipeObjId, comment) => dispatch => {
    axiosInstance.put(BASE_URL + "recipes/" + recipeObjId + '/posts/', JSON.stringify(comment))
        .then(()=> {
            dispatch({type: SHOW_SUCCESS_ALERT, payload: COMMENT_UPDATE_SUCCESS});
            dispatch({ type: CLEAR_SAVING_RECIPE_COMMENT });
            dispatch(fetchComments(recipeObjId));
        });
};

export const createRecipeComment = (recipeObjId, comment) => dispatch => {
    axiosInstance.post(BASE_URL + "recipes/" + recipeObjId + '/posts/', JSON.stringify(comment))
        .then(()=> {
            dispatch({type: SHOW_SUCCESS_ALERT, payload: COMMENT_CREATE_SUCCESS});
            dispatch({ type: CLEAR_SAVING_RECIPE_COMMENT });
            dispatch(fetchComments(recipeObjId));
        });
};

export const cancelFromSaveRecipeComment = () => dispatch => {
    dispatch({ type: CLEAR_SAVING_RECIPE_COMMENT });
};

export const deleteSelectedRecipeComment = (recipeObjId, objId) => dispatch => {
    axiosInstance.delete(BASE_URL + "recipes/" +recipeObjId + '/posts/' + objId)
        .then(()=> {
            dispatch({ type: HIDE_CONFIRMATION_DIALOG });
            dispatch({type: SHOW_SUCCESS_ALERT, payload: COMMENT_DELETE_SUCCESS});
            dispatch(fetchComments(recipeObjId));
        });
};

export const askForDeleteRecipeComment = (objId) => dispatch => {
    dispatch({ type: SHOW_CONFIRMATION_DIALOG, message: QUESTION_DELETE_COMMENT, confirmationParameters: {type: TYPE_COMMENT, objId: objId}});
};


// ALL :
export const cancelFromDelete = () => dispatch => {
    dispatch({ type: HIDE_CONFIRMATION_DIALOG });
};

