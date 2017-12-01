import {combineReducers} from "redux"
import {reducer as formReducer} from "redux-form"

import authReducer from "./auth/reducer"
import userReducer from "./userCreateDialog/reducer"
import commons from "./common/reducer"
import confirmationReducer from "./components/confirmationDialog/reducer"

export default combineReducers({
    form: formReducer,
    authReducer,
    userReducer,
    commons,
    confirmationReducer
})
