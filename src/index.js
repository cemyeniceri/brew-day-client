import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import {Router, Route, browserHistory} from 'react-router'
import {loginUserSuccess} from './auth/actions';
import App from './App';
import {requireAuthentication} from './components/AuthenticatedComponent';
import LoginPage from './auth/LoginPage'
import PrincipalPage from './principal/Page'
import HomePage from './home'
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
                <Route path="/" component={requireAuthentication(HomePage)}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/principal" component={requireAuthentication(PrincipalPage)}/>
            </Route>
        </Router>
    </Provider>, app
);
