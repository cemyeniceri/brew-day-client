import {
    SHOW_LOADING_PAGE,
    HIDE_LOADING_PAGE
} from '../../constants'

const initialState = {
    isShowing: false,
};

function loadingPageReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_LOADING_PAGE: {
            state = {
                ...state,
                isShowing: true,
            };
            break;
        }

        case HIDE_LOADING_PAGE: {
            state = {
                ...state,
                isShowing: false,
            };
            break;
        }

        default:
            return state;
    }
    return state;
}

export default loadingPageReducer;
