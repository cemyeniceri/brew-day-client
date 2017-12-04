import  {
    /* Shop List Part */
    RECEIVE_SHOP_LISTS,
    RECEIVE_SHOP_LIST,
    RECEIVE_SHOP_LIST_FOR_UPDATE,
    SHOP_LIST_UPDATE_START,
    SHOP_LIST_CREATE_START,
    CLEAR_SELECTED_SHOP_LIST,
    /* Ingredient Part */
    RECEIVE_SHOP_LIST_INGREDIENTS,
    SHOP_LIST_INGREDIENT_UPDATE_START,
    SHOP_LIST_INGREDIENT_CREATE_START,
    CLEAR_SAVING_SHOP_LIST_INGREDIENT
} from '../constants';

const initialState = {
    shopLists: [],
    selectedShopList: null,
    isShopListUpdate: false,

    ingredients: [],
    selectedIngredient: null,
    isIngredientUpdate : false,
    isShownIngredientForm: false,

    initialValues: null,
    error: null
};

const shopListReducer = (state = initialState, action) => {
    switch (action.type) {

        /* Shop List Part */
        case RECEIVE_SHOP_LISTS: {
            const temp = [];
            action.payload.forEach(shopList => temp.push({value: shopList.objId, label: shopList.name}));
            state = {
                ...state,
                shopLists: temp
            };
            break;
        }

        case RECEIVE_SHOP_LIST: {
            state = {
                ...state,
                selectedShopList: action.payload
            };
            break;
        }

        case RECEIVE_SHOP_LIST_FOR_UPDATE: {
            state = {
                ...state,
                isShopListUpdate: true,
                initialValues: action.payload
            };
            break;
        }

        case SHOP_LIST_UPDATE_START: {
            state = {
                ...state,
                isShopListUpdate: true
            };
            break;
        }

        case SHOP_LIST_CREATE_START: {
            state = {
                ...state,
                isShopListUpdate: false,
                initialValues: null
            };
            break;
        }

        case CLEAR_SELECTED_SHOP_LIST: {
            state = {
                ...state,
                isShopListUpdate: false,
                selectedShopList: null,
                initialValues: null
            };
            break;
        }


        /* Ingredient Part */
        case RECEIVE_SHOP_LIST_INGREDIENTS : {
            state = {
                ...state,
                ingredients: action.payload
            };
            break;
        }

        case SHOP_LIST_INGREDIENT_UPDATE_START : {
            state = {
                ...state,
                isIngredientUpdate: true,
                isShownIngredientForm: true,
                selectedIngredient: action.payload
            };
            break;
        }

        case SHOP_LIST_INGREDIENT_CREATE_START : {
            state = {
                ...state,
                isIngredientUpdate: false,
                isShownIngredientForm: true,
                selectedIngredient: null
            };
            break;
        }

        case CLEAR_SAVING_SHOP_LIST_INGREDIENT : {
            state = {
                ...state,
                isIngredientUpdate: false,
                isShownIngredientForm: false,
                selectedIngredient: null
            };
            break;
        }


        default: {
            return state;
        }
    }
    return state;
};

export default shopListReducer;
