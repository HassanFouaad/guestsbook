import { combineReducers } from "redux";
import authReducer from "./authReducer";
import messagesReducer from "./messagesReducer";
import { reducer as toastrReducer } from "react-redux-toastr";
export default combineReducers({
  auth: authReducer,
  toastr: toastrReducer,
  messages: messagesReducer,
});
