import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as toastrReducer } from "react-redux-toastr";
export default combineReducers({ auth: authReducer, toastr: toastrReducer });
