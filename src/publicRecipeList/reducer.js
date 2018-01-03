import {
    FETCH_PUBLIC_RECIPES
} from '../constants'

const initialState = {
    publicRecipes: []
};

function publicRecipesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PUBLIC_RECIPES: {
            state = {
                ...state,
                publicRecipes: action.payload
            };
            break;
        }

        default:
            return state;
    }
    return state;
}

export default publicRecipesReducer;
