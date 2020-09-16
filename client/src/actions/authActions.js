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

export const loadUser = () => (dispatch, getState) => {
  //User Loading
  dispatch(userLodaing());

  if (typeof window !== undefined && localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    return dispatch({
      type: USER_LOADED,
      payload: token,
    });
  } else {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const tokenConfig = (getState) => {
  //Get token from Local Storage
  let token = getState().auth.token;
  //headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  //If token , add to headers

  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
};
