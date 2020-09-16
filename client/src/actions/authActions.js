import axios from "axios";
import { toastr } from "react-redux-toastr";
import {
  AUTH_ERROR,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  USER_LOADED,
  USER_LOADING,
  LOGOUT_SUCCESS,
} from "./types";

export const userLodaing = () => ({
  type: USER_LOADING,
});
