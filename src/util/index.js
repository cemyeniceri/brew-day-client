import {SHOW_ERROR_ALERT} from '../constants'

export const handleHttpError = (err)=> {
    console.log("Error : " + err);
    const errorMessage = err.response ? err.response.data.message : "UNKNOWN ERROR";
    return {type: SHOW_ERROR_ALERT, payload: errorMessage};
};