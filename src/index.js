import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import {Router, Route, browserHistory} from 'react-router'
import {loginUserSuccess} from './auth/actions';
import App from './App';
import {requireAuthentication} from './components/AuthenticatedComponent';
import LoginPage from './auth/LoginPage'
import HomePage from './home'
import PageIngredient from './ingredient/PageIngredient'
import PageIngredientAdd from './ingredient/PageIngredientAdd'
import PageRecipe from './recipes/PageRecipe'
import PageRecipeAdd from './recipes/PageRecipeAdd'
import PageShopList from './shoplist/PageShopList'
import PageShopListAdd from './shoplist/PageShopListAdd'
import './index.css';
import store from "./store"

const app = document.getElementById('root');

const token = localStorage.getItem('token');
if (token !== null) {
    store.dispatch(loginUserSuccess(token));
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route component={App}>
                <Route path="/login" component={LoginPage}/>
                <Route path="/" component={requireAuthentication(HomePage)}/>
                <Route path="/ingredients" component={requireAuthentication(PageIngredient)}/>
                <Route path="/ingredients/:ingredientObjId" component={requireAuthentication(PageIngredientAdd)}/>
                <Route path="/recipes" component={requireAuthentication(PageRecipe)}/>
                <Route path="/recipes/:recipeObjId" component={requireAuthentication(PageRecipeAdd)}/>
                <Route path="/shop-lists" component={requireAuthentication(PageShopList)}/>
                <Route path="/shop-lists/:shopObjId" component={requireAuthentication(PageShopListAdd)}/>
            </Route>
        </Router>
    </Provider>, app
);
