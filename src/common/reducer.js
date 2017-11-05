import {SHOW_ERROR_ALERT, SHOW_INFO_ALERT,SHOW_SUCCESS_ALERT, SHOW_WARNING_ALERT} from '../constants'

const alertContainerInitialState = {
    type: "info",
    message: ""
};

const alertsReducer = (state = alertContainerInitialState, action) => {
    switch (action.type) {
        case SHOW_ERROR_ALERT: {
            state = {...state, message: action.payload, type: 'danger'};
            break;
        }

        case SHOW_INFO_ALERT: {
            state = {...state, message: action.payload, type: 'info'};
            break;
        }

        case SHOW_WARNING_ALERT: {
            state = {...state, message: action.payload, type: 'warning'};
            break;
        }

        case SHOW_SUCCESS_ALERT: {
            state = {...state, message: action.payload, type: 'success'};
            break;
        }

        default: {
            return state;
        }
    }
    return state;
};

export default alertsReducer;
