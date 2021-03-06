import {combineReducers} from "redux"
import {reducer as formReducer} from "redux-form"

import authReducer from "./auth/reducer"
import userReducer from "./userCreateDialog/reducer"
import ingredientReducer from "./ingredient/reducer";
import recipeReducer from './recipes/reducer';
import shopListReducer from './shoplist/reducer';
import brewTodayReducer from './brewToday/reducer';
import publicRecipesReducer from './publicRecipeList/reducer';
import commons from "./common/reducer";
import confirmationReducer from "./components/confirmationDialog/reducer";
import loadingPageReducer from "./components/loadingPage/reducer";

export default combineReducers({
    form: formReducer,
    authReducer,
    userReducer,
    ingredientReducer,
    recipeReducer,
    shopListReducer,
    brewTodayReducer,
    publicRecipesReducer,
    commons,
    confirmationReducer,
    loadingPageReducer
})
