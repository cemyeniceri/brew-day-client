import {
    SHOW_LOADING_PAGE,
    HIDE_LOADING_PAGE
} from "../../constants/index";


export const showLoadingPage = () => dispatch => {
    dispatch({type: SHOW_LOADING_PAGE});
};

export const hideLoadingPage = () => dispatch => {
    dispatch({ type: HIDE_LOADING_PAGE });
};