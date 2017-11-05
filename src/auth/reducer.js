import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER
} from '../constants';
import jwtDecode from 'jwt-decode';

const initialState = {
    token: null,
    username: null,
    isAuthenticated: false,
    isAuthenticating: false,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_REQUEST: {
            state = {...state, isAuthenticating: true};
            break;
        }
        case LOGIN_USER_FAILURE: {
            state = {
                ...state,
                isAuthenticating: false,
                isAuthenticated: false,
                token: null,
                username: null,
                error: action.payload
            };
            break;
        }
        case LOGIN_USER_SUCCESS: {
            state = {
                ...state,
                isAuthenticating: false,
                isAuthenticated: true,
                token: action.payload,
                username: jwtDecode(action.payload).username,
            };
            break;
        }
        case LOGOUT_USER: {
            state = {
                ...state,
                isAuthenticating: false,
                isAuthenticated: false,
                token: null,
                username: null
            };
            break;
        }

        default: {
            return state;
        }
    }
    return state;
};

export default authReducer;
