import {
    SHOW_ERROR_ALERT,
    HIDE_CONFIRMATION_DIALOG,
    CLOSE_BREW_LIST_DIALOG,
    HIDE_LOADING_PAGE
} from '../constants'

export const handleHttpError = (err) => dispatch => {
    console.log("Error : " + err);
    const errorMessage = err.response ? err.response.data.message : "UNKNOWN ERROR";
    dispatch({type: HIDE_LOADING_PAGE});
    dispatch({type: HIDE_CONFIRMATION_DIALOG});
    dispatch({type: CLOSE_BREW_LIST_DIALOG});
    dispatch({type: SHOW_ERROR_ALERT, payload: errorMessage});
};