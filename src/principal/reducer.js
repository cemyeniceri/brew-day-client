import  {
    RECEIVE_PRINCIPALS,
    LOAD_PRINCIPAL,
    CLEAR_PRINCIPAL
} from '../constants';

const initialState = {
    principals: [],
    isUpdate: false,
    initialValues: null,
    error: null
};

const principalReducer = (state = initialState, action) => {
    switch (action.type) {

        case RECEIVE_PRINCIPALS: {
            state = {
                ...state,
                isUpdate: false,
                initialValues: null,
                principals: action.payload.content
            };
            break;
        }

        case LOAD_PRINCIPAL: {
            state = {
                ...state,
                isUpdate: true,
                initialValues: action.data
            };
            break;
        }

        case CLEAR_PRINCIPAL: {
            state = {
                ...state,
                isUpdate: false,
                initialValues: null
            };
            break;
        }

        default: {
            return state;
        }
    }
    return state;
};

export default principalReducer;
