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
                <Route path="/recipes" component={requireAuthentication(HomePage)}/>
                <Route path="/ingredients" component={requireAuthentication(PageIngredient)}/>
                <Route path="/ingredients/:ingredientObjId" component={requireAuthentication(PageIngredientAdd)}/>
                <Route path="/shop-lists" component={requireAuthentication(HomePage)}/>
            </Route>
        </Router>
    </Provider>, app
);
