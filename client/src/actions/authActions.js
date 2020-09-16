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

////
export const loadUser = () => (dispatch, getState) => {
  //User Loading
  dispatch(userLodaing());

  if (typeof window !== undefined && localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    return dispatch({
      type: USER_LOADED,
      payload: JSON.parse(token),
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

///Register Action
export const register = ({ firstname, lastname, email, password }) => (
  dispatch
) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = {
    firstname,
    lastname,
    email,
    password,
  };
  axios
    .post("/api/signup", body, config)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((error) => {
      toastr.error(error.response.data.error);
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

//Log in Action
export const login = ({ email, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const body = { email, password };
  axios
    .post("/api/signin", body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
      toastr.success("Welcome Back!", "You have successfully logged in");
    })
    .catch((error) => {
      dispatch(
        returnErrors(error.response.data, error.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};
