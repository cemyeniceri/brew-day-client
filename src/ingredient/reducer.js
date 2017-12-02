import  {
    RECEIVE_INGREDIENTS,
    RECEIVE_INGREDIENT,
    INGREDIENT_CREATE_START,
    INGREDIENT_UPDATE_START
} from '../constants';

const initialState = {
    ingredients: [],
    isUpdate: false,
    initialValues: null,
    error: null
};

const ingredientReducer = (state = initialState, action) => {
    switch (action.type) {

        case RECEIVE_INGREDIENTS: {
            debugger;
            state = {
                ...state,
                isUpdate: false,
                initialValues: null,
                ingredients: action.payload
            };
            break;
        }

        case RECEIVE_INGREDIENT: {
            state = {
                ...state,
                initialValues: action.payload
            };
            break;
        }

        case INGREDIENT_CREATE_START: {
            state = {
                ...state,
                isUpdate: true
            };
            break;
        }

        case INGREDIENT_UPDATE_START: {
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

export default ingredientReducer;
