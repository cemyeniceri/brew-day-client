import  {
    /* Recipe Part */
    RECEIVE_RECIPES,
    RECEIVE_RECIPE,
    RECEIVE_RECIPE_FOR_UPDATE,
    RECIPE_UPDATE_START,
    RECIPE_CREATE_START,
    CLEAR_SELECTED_RECIPE,
    CHECK_INGREDIENTS_AVAILABILITY,
    /* Ingredient Part */
    RECEIVE_RECIPE_INGREDIENTS,
    RECIPE_INGREDIENT_UPDATE_START,
    RECIPE_INGREDIENT_CREATE_START,
    CLEAR_SAVING_RECIPE_INGREDIENT,
    /* Comment Part */
    RECEIVE_RECIPE_COMMENTS,
    RECIPE_COMMENT_UPDATE_START,
    RECIPE_COMMENT_CREATE_START,
    CLEAR_SAVING_RECIPE_COMMENT
} from '../constants';

const initialState = {
    recipes: [],
    selectedRecipe: null,
    isRecipeUpdate: false,
    AvailableIngredients: [],

    ingredients: [],
    selectedIngredient: null,
    isIngredientUpdate : false,
    isShownIngredientForm: false,

    comments: [],
    selectedComment: null,
    isCommentUpdate: false,
    isShownCommentForm: false,

    initialValues: null,
    error: null
};

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {

        /* Recipe Part */
        case RECEIVE_RECIPES: {
            const temp = [];
            action.payload.forEach(recipe => temp.push({value: recipe.objId, label: recipe.name}));
            state = {
                ...state,
                recipes: temp
            };
            break;
        }

        case RECEIVE_RECIPE: {
            state = {
                ...state,
                selectedRecipe: action.payload
            };
            break;
        }

        case RECEIVE_RECIPE_FOR_UPDATE: {
            state = {
                ...state,
                isRecipeUpdate: true,
                initialValues: action.payload
            };
            break;
        }

        case RECIPE_UPDATE_START: {
            state = {
                ...state,
                isRecipeUpdate: true
            };
            break;
        }

        case RECIPE_CREATE_START: {
            state = {
                ...state,
                isRecipeUpdate: false,
                initialValues: null
            };
            break;
        }

        case CLEAR_SELECTED_RECIPE: {
            state = {
                ...state,
                isRecipeUpdate: false,
                selectedRecipe: null,
                initialValues: null
            };
            break;
        }

        case CHECK_INGREDIENTS_AVAILABILITY : {
            state = {
                ...state,
                AvailableIngredients: action.payload
            };
            break;
        }


        /* Ingredient Part */
        case RECEIVE_RECIPE_INGREDIENTS : {
            state = {
                ...state,
                ingredients: action.payload
            };
            break;
        }

        case RECIPE_INGREDIENT_UPDATE_START : {
            state = {
                ...state,
                isIngredientUpdate: true,
                isShownIngredientForm: true,
                selectedIngredient: action.payload
            };
            break;
        }

        case RECIPE_INGREDIENT_CREATE_START : {
            state = {
                ...state,
                isIngredientUpdate: false,
                isShownIngredientForm: true,
                selectedIngredient: null
            };
            break;
        }

        case CLEAR_SAVING_RECIPE_INGREDIENT : {
            state = {
                ...state,
                isIngredientUpdate: false,
                isShownIngredientForm: false,
                selectedIngredient: null
            };
            break;
        }



        /* Comment Part */
        case RECEIVE_RECIPE_COMMENTS : {
            state = {
                ...state,
                comments: action.payload
            };
            break;
        }

        case RECIPE_COMMENT_UPDATE_START : {
            state = {
                ...state,
                isCommentUpdate: true,
                isShownCommentForm: true,
                selectedComment: action.payload
            };
            break;
        }

        case RECIPE_COMMENT_CREATE_START : {
            state = {
                ...state,
                isCommentUpdate: false,
                isShownCommentForm: true,
                selectedComment: null
            };
            break;
        }

        case CLEAR_SAVING_RECIPE_COMMENT : {
            state = {
                ...state,
                isCommentUpdate: false,
                isShownCommentForm: false,
                selectedComment: null
            };
            break;
        }


        //default
        default: {
            return state;
        }
    }
    return state;
};

export default recipeReducer;
