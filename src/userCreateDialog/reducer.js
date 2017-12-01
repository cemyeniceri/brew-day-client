import  {
    SHOW_CREATE_USER_DIALOG,
    HIDE_CREATE_USER_DIALOG
} from '../constants';

const initialState = {
    isShowing: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case SHOW_CREATE_USER_DIALOG: {
            state = {
                ...state,
                isShowing: true
            };
            break;
        }

        case HIDE_CREATE_USER_DIALOG: {
            state = {
                ...state,
                isShowing: false
            };
            break;
        }

    }
    return state;
};

export default userReducer;
