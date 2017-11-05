import {
    SHOW_CONFIRMATION_DIALOG,
    HIDE_CONFIRMATION_DIALOG
} from '../../constants'

const initialState = {
    isShowing: false,
    message: '',
    confirmationParameters: null
};

function confirmationDialogReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_CONFIRMATION_DIALOG: {
            state = {
                ...state,
                isShowing: true,
                message: action.message,
                confirmationParameters: action.confirmationParameters
            };
            break;
        }

        case HIDE_CONFIRMATION_DIALOG: {
            state = {
                ...state,
                isShowing: false,
                confirmationParameters: null
            };
            break;
        }


        default:
            return state;
    }
    return state;
}

export default confirmationDialogReducer;
