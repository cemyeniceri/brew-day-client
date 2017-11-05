import {combineReducers} from "redux"
import {reducer as formReducer} from "redux-form"

import authReducer from "./auth/reducer"
import principalReducer from "./principal/reducer"
import commons from "./common/reducer"
import confirmationReducer from "./components/confirmationDialog/reducer"

export default combineReducers({
    form: formReducer,
    authReducer,
    principalReducer,
    commons,
    confirmationReducer
})
