import axios from "axios";
import { toastr } from "react-redux-toastr";
import {
  ADD_MESSAGE,
  ADD_MESSAGE_FAILED,
  ADD_MESSAGE_LOADING,
  MESSAGES_FAILED,
  MESSAGES_LOADED,
  MESSAGES_LOADING,
} from "../actions/types";
import { tokenConfig } from "./authActions";
export const getMessages = () => (dispatch) => {
  dispatch({ type: MESSAGES_LOADING });
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  axios
    .get("/api/messages", config)
    .then((res) => {
      console.log(res);
      return dispatch({
        type: MESSAGES_LOADED,
        payload: res.data,
      });
    })
    .catch((error) => {
      if (error) {
        dispatch({
          type: MESSAGES_FAILED,
          payload: error,
        });
      }
    });
};

///Adding Message
export const addMessage = (title, text) => async (dispatch, getState) => {
  dispatch({ type: ADD_MESSAGE_LOADING });
  try {
    const body = { title, text };
    let res = await axios.post(`/api/messages`, body, tokenConfig(getState));
    dispatch({
      type: ADD_MESSAGE,
      payload: res.data,
    });
    toastr.success("", `You have successfully added a message`);
  } catch (error) {
    console.log(error);
    toastr.error(error.response.data.error);
    dispatch({
      type: ADD_MESSAGE_FAILED,
    });
  }
};
