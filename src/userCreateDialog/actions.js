import axios from "axios";
import {handleHttpError} from '../util'
import  {
    BASE_URL,
    SHOW_SUCCESS_ALERT,
    HIDE_CREATE_USER_DIALOG,
    SHOW_CREATE_USER_DIALOG
} from '../constants'

import  {
    USER_CREATE_SUCCESS,
} from '../constants/message'

const instance = axios.create({
    baseURL: BASE_URL + 'principals',
    headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')}
});

export const openCreateUserDialog = () => dispatch => {
    dispatch({type: SHOW_CREATE_USER_DIALOG});
};

export const cancelCreateUser = () => dispatch => {
    dispatch({type: HIDE_CREATE_USER_DIALOG});
};

export const createNewUser = (user) => dispatch => {
    instance.post(BASE_URL + 'principals', JSON.stringify(user))
        .then(() => {
        dispatch({type: SHOW_SUCCESS_ALERT, payload: USER_CREATE_SUCCESS});
        dispatch({type: HIDE_CREATE_USER_DIALOG});
    }).catch((err) => {
        dispatch(handleHttpError(err));
    });
};


