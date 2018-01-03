import {
    BASE_URL,
    LOGIN_USER_REQUEST,
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER
} from '../constants';
import axios from "axios";
import jwtDecode from 'jwt-decode';
import {browserHistory} from 'react-router'
import {handleHttpError} from '../util'
import {removeToken} from "../common/axiosInstance";

export function loginUserSuccess(token) {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: token
    }
}

export function loginUserFailure(error) {
    removeToken();
    return {
        type: LOGIN_USER_FAILURE,
        payload: {
            status: error.status,
            statusText: error.message
        }
    }
}

export function loginUserRequest() {
    return {
        type: LOGIN_USER_REQUEST
    }
}

export function logout() {
    removeToken();
    return {
        type: LOGOUT_USER
    }
}

export function logoutAndRedirect() {
    return (dispatch, state) => {
        dispatch(logout());
        browserHistory.push('/login')
    }
}

export const loginUser = (loginForm) => dispatch => {
    dispatch(loginUserRequest());
    const instance = axios.create({
        headers: {'Content-Type': 'application/json'}
    });
    instance.post(BASE_URL + 'principals/login', JSON.stringify(loginForm))
        .then((response) => {
        try {
            jwtDecode(response.data.token);
            localStorage.setItem('token', response.data.token);
            dispatch(loginUserSuccess(response.data.token));
            browserHistory.push('/');
        } catch (e) {
            console.log(e);
            dispatch(loginUserFailure({
                response: {
                    status: 403,
                    statusText: 'Invalid token'
                }
            }));
        }
    }).catch((err) => {
        dispatch(loginUserFailure(err));
        dispatch(handleHttpError(err));
    });
};