import  {
    /* Recipe Part */
    RECEIVE_RECIPES,
    RECEIVE_RECIPE,
    RECEIVE_RECIPE_FOR_UPDATE,
    RECIPE_UPDATE_START,
    RECIPE_CREATE_START,
    CLEAR_SELECTED_RECIPE,
    /* Check Ingredient And Create Shop List From Recipe */
    CHECK_INGREDIENTS_AVAILABILITY,
    OPEN_CREATE_SHOP_LIST_DIALOG,
    DELETE_INGREDIENT_FROM_RECIPE_SHOP_LIST,
    SAVE_RECIPE_SHOP_LIST,
    CANCEL_CREATE_SHOP_LIST,
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

    availableIngredients: {},
    shopListFromRecipe: {
        name: null,
        shopListIngredients: []
    },
    isShopListDoable: false,
    shopListDialogInitValues: null,
    isShownCreateRecipeDialog: false,

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
                selectedRecipe: action.payload,
                availableIngredients: [],
                shopListDialogInitValues: null,
                shopListFromRecipe: {
                    name: null,
                    shopListIngredients: []
                },
                isShopListDoable: false
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

        /* Check Ingredients And Create Shop List From Recipe */
        case CHECK_INGREDIENTS_AVAILABILITY : {
            let isDoable = false;
            Object.values(action.payload).forEach(ingredient => {
                if(ingredient.state === false) {
                    isDoable = true;
                }
            });

            state = {
                ...state,
                availableIngredients: action.payload,
                isShopListDoable: isDoable,
                shopListDialogInitValues: null,
                isShownCreateRecipeDialog: false
            };
            break;
        }

        case OPEN_CREATE_SHOP_LIST_DIALOG: {
            // Create ShopList:
            let tempShopList = {
                name: state.selectedRecipe.name + ' Shop List',
                shopListIngredients: []
            };
            let tempIngredientsInitState = {};
            state.ingredients.forEach(ingredient => {
                if(state.availableIngredients[ingredient.objId].state === false)
                    tempShopList.shopListIngredients.push({
                        ...ingredient,
                        amount: state.availableIngredients[ingredient.objId].amount
                    });
                tempIngredientsInitState[ingredient.objId] = state.availableIngredients[ingredient.objId].amount;
            });

            // Set form initial values:


            state = {
                ...state,
                shopListFromRecipe: tempShopList,
                shopListDialogInitValues: {
                    name: tempShopList.name,
                    ...tempIngredientsInitState
                },
                isShownCreateRecipeDialog: true
            };
            break;
        }

        case DELETE_INGREDIENT_FROM_RECIPE_SHOP_LIST: {
            const editedIngredientList = state.shopListFromRecipe.shopListIngredients.filter(ingredient =>
                ingredient.objId !== action.payload
            );
            state = {
                ...state,
                shopListFromRecipe: {
                    ...state.shopListFromRecipe,
                    shopListIngredients: editedIngredientList
                }
            };
            break;
        }

        case SAVE_RECIPE_SHOP_LIST: {
            state = {
                ...state,
                shopListDialogInitValues: null,
                isShownCreateRecipeDialog: false,
                shopListFromRecipe: {
                    name: null,
                    shopListIngredients: []
                },
            };
        }

        case CANCEL_CREATE_SHOP_LIST: {
            state = {
                ...state,
                shopListDialogInitValues: null,
                isShownCreateRecipeDialog: false,
                shopListFromRecipe: {
                    name: null,
                    shopListIngredients: []
                },
            };
            break;
        }


        /* Ingredient Part */
        case RECEIVE_RECIPE_INGREDIENTS : {
            state = {
                ...state,
                ingredients: action.payload,
                availableIngredients: [],
                shopListFromRecipe: {
                    name: null,
                    shopListIngredients: []
                },
                isShopListDoable: false
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
