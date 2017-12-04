export const BASE_URL = "http://localhost:8080/";

export const CREATE_ITEM_ROUTE = 'new';

// LOGIN PAGE :
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGOUT_USER = 'LOGOUT_USER';

// ALERT POPUP :
export const SHOW_INFO_ALERT = 'SHOW_INFO_ALERT';
export const SHOW_ERROR_ALERT = 'SHOW_ERROR_ALERT';
export const SHOW_WARNING_ALERT = 'SHOW_WARNING_ALERT';
export const SHOW_SUCCESS_ALERT = 'SHOW_SUCCESS_ALERT';

// USER CREATE DIALOG:
export const SHOW_CREATE_USER_DIALOG  = 'SHOW_CREATE_USER_DIALOG';
export const HIDE_CREATE_USER_DIALOG  = 'HIDE_CREATE_USER_DIALOG';

// CONFIRMATION DIALOG :
export const SHOW_CONFIRMATION_DIALOG = 'SHOW_CONFIRMATION_DIALOG';
export const HIDE_CONFIRMATION_DIALOG = 'HIDE_CONFIRMATION_DIALOG';

// LOADING PAGE :
export const SHOW_LOADING_PAGE = 'SHOW_LOADING_PAGE';
export const HIDE_LOADING_PAGE = 'HIDE_LOADING_PAGE';

// INGREDIENT PAGE :
export const RECEIVE_INGREDIENTS = 'RECEIVE_INGREDIENTS';
export const RECEIVE_INGREDIENT  = 'RECEIVE_INGREDIENT';
export const INGREDIENT_CREATE_START = 'INGREDIENT_CREATE_START';
export const INGREDIENT_UPDATE_START = 'INGREDIENT_UPDATE_START';

// TYPES :
export const TYPE_RECIPE = 'recipe';
export const TYPE_SHOP_LIST = 'shop-list';
export const TYPE_INGREDIENT = 'ingredient';
export const TYPE_COMMENT = 'comment';

// ###################### RECIPE PAGE : ######################
/* Recipe Part */
export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';
export const RECEIVE_RECIPE_FOR_UPDATE = 'RECEIVE_RECIPE_FOR_UPDATE';
export const RECIPE_UPDATE_START = 'RECIPE_UPDATE_START';
export const RECIPE_CREATE_START = 'RECIPE_CREATE_START';
export const CLEAR_SELECTED_RECIPE = 'CLEAR_SELECTED_RECIPE';
export const CHECK_INGREDIENTS_AVAILABILITY = 'CHECK_INGREDIENTS_AVAILABILITY';
/* Ingredient Part */
export const RECEIVE_RECIPE_INGREDIENTS = 'RECEIVE_RECIPE_INGREDIENTS';
export const RECIPE_INGREDIENT_UPDATE_START = 'RECIPE_INGREDIENT_UPDATE_START';
export const RECIPE_INGREDIENT_CREATE_START = 'RECIPE_INGREDIENT_CREATE_START';
export const CLEAR_SAVING_RECIPE_INGREDIENT = 'CLEAR_SAVING_RECIPE_INGREDIENT';
/* Comment Part */
export const RECEIVE_RECIPE_COMMENTS = 'RECEIVE_RECIPE_COMMENTS';
export const RECIPE_COMMENT_UPDATE_START = 'COMMENT_UPDATE_START';
export const RECIPE_COMMENT_CREATE_START = 'COMMENT_CREATE_START';
export const CLEAR_SAVING_RECIPE_COMMENT = 'CLEAR_SAVING_RECIPE_COMMENT';
// ###########################################################

// ##################### SHOP-LIST PAGE : ####################
/* Shop List Part */
export const RECEIVE_SHOP_LISTS = 'RECEIVE_SHOP_LISTS';
export const RECEIVE_SHOP_LIST = 'RECEIVE_SHOP_LIST';
export const RECEIVE_SHOP_LIST_FOR_UPDATE = 'RECEIVE_SHOP_LIST_FOR_UPDATE';
export const SHOP_LIST_UPDATE_START = 'SHOP_LIST_UPDATE_START';
export const SHOP_LIST_CREATE_START = 'SHOP_LIST_CREATE_START';
export const CLEAR_SELECTED_SHOP_LIST = 'CLEAR_SELECTED_SHOP_LIST';
/* Ingredient Part */
export const RECEIVE_SHOP_LIST_INGREDIENTS = 'RECEIVE_SHOP_LIST_INGREDIENTS';
export const SHOP_LIST_INGREDIENT_UPDATE_START = 'SHOP_LIST_INGREDIENT_UPDATE_START';
export const SHOP_LIST_INGREDIENT_CREATE_START = 'SHOP_LIST_INGREDIENT_CREATE_START';
export const CLEAR_SAVING_SHOP_LIST_INGREDIENT = 'CLEAR_SAVING_SHOP_LIST_INGREDIENT';
// ###########################################################