import {
    OPEN_BREW_LIST_DIALOG,
    CLOSE_BREW_LIST_DIALOG
} from '../constants'

const initialState = {
    isShowing: false,
    brewList: []
};

function brewTodayReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_BREW_LIST_DIALOG: {
            state = {
                ...state,
                isShowing: true,
                brewList: action.payload
            };
            break;
        }

        case CLOSE_BREW_LIST_DIALOG: {
            state = {
                ...state,
                isShowing: false,
                brewList: []
            };
            break;
        }


        default:
            return state;
    }
    return state;
}

export default brewTodayReducer;
