import axios from "axios";
import {reset} from 'redux-form';
import {handleHttpError} from '../util'
import  {
    BASE_URL,
    SHOW_SUCCESS_ALERT,
    RECEIVE_PRINCIPALS,
    LOAD_PRINCIPAL,
    CLEAR_PRINCIPAL,
    SHOW_CONFIRMATION_DIALOG,
    HIDE_CONFIRMATION_DIALOG
} from '../constants'

import  {
    PRINCIPAL_CREATE_SUCCESS,
    PRINCIPAL_UPDATE_SUCCESS,
    PRINCIPAL_DELETE_SUCCESS,
    QUESTION_FOR_DELETE_PRINCIPAL
} from '../constants/message'

const instance = axios.create({
    baseURL: BASE_URL + 'principals',
    headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')}
});

export const fetchPrincipals = () => dispatch => {
    instance.get(BASE_URL + 'principals')
        .then((response)=> {
        dispatch({type: RECEIVE_PRINCIPALS, payload: response.data})
    }).catch((err) => {
        dispatch(handleHttpError(err));
    })
};

export const createPrincipal = (principal) => dispatch => {
    instance.post(BASE_URL + 'principals', JSON.stringify(principal))
        .then(() => {
        dispatch(reset('principalForm'));
        dispatch(fetchPrincipals());
        dispatch({type: SHOW_SUCCESS_ALERT, payload: PRINCIPAL_CREATE_SUCCESS})
    }).catch((err) => {
        dispatch(handleHttpError(err));
    });
};

export const deletePrincipal = (objId) => dispatch => {
    instance.delete(BASE_URL + 'principals/' + objId)
        .then(() => {
        dispatch(fetchPrincipals());
        dispatch({type: HIDE_CONFIRMATION_DIALOG});
        dispatch({type: SHOW_SUCCESS_ALERT, payload: PRINCIPAL_DELETE_SUCCESS });
    }).catch((err) => {
        dispatch({type: HIDE_CONFIRMATION_DIALOG});
        dispatch(handleHttpError(err));
    });
};

export const updatePrincipal = (principal) => dispatch => {
    instance.put(BASE_URL + 'principals', JSON.stringify(principal))
        .then(() => {
        dispatch(fetchPrincipals());
        dispatch({type: SHOW_SUCCESS_ALERT, payload: PRINCIPAL_UPDATE_SUCCESS});
    }).catch((err) => {
        dispatch(handleHttpError(err));
    });
};

export const loadPrincipal = (data) => dispatch => {
    dispatch({ type: LOAD_PRINCIPAL, data });
};

export const clearPrincipal = () => dispatch => {
    dispatch({ type: CLEAR_PRINCIPAL});
    dispatch(reset('principalForm'))
};

export const cancelFromDelete = () => dispatch => {
    dispatch({ type: HIDE_CONFIRMATION_DIALOG });
};

export const askForDelete = (objId) => dispatch => {
    dispatch({ type: SHOW_CONFIRMATION_DIALOG, message: QUESTION_FOR_DELETE_PRINCIPAL, confirmationParameters: objId });
};
