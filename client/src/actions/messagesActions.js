import axios from "axios";
import { toastr } from "react-redux-toastr";
import {
  ADD_MESSAGE,
  ADD_MESSAGE_FAILED,
  ADD_MESSAGE_LOADING,
  MESSAGES_FAILED,
  MESSAGES_LOADED,
  MESSAGES_LOADING,
  DELETE_MESSAGE,
  ADD_REPLY,
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
export const addMessage = (subject, text) => async (dispatch, getState) => {
  dispatch({ type: ADD_MESSAGE_LOADING });
  try {
    const body = { subject, text };
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

export const delMessage = (messageId) => async (dispatch, getState) => {
  dispatch({ type: ADD_MESSAGE_LOADING });
  try {
    let res = await axios.delete(
      `/api/messages/${messageId}`,
      tokenConfig(getState)
    );
    dispatch({
      type: DELETE_MESSAGE,
      payload: res.data,
    });
    toastr.success("", `You have successfully deleted a message`);
    dispatch(getMessages());
  } catch (error) {
    console.log(error);
    toastr.error(error.response.data.error);
    dispatch({
      type: ADD_MESSAGE_FAILED,
    });
  }
};

export const addReply = (messageId, text) => async (dispatch, getState) => {
  dispatch({ type: ADD_MESSAGE_LOADING });
  try {
    const body = { text };
    let res = await axios.post(
      `/api/messages/${messageId}`,
      body,
      tokenConfig(getState)
    );
    dispatch({
      type: ADD_REPLY,
      payload: res.data,
    });
    toastr.success("", `You have successfully added a reply`);
    dispatch(getMessages());
  } catch (error) {
    console.log(error);
    toastr.error("Please Log in to Reply");
    dispatch({
      type: ADD_MESSAGE_FAILED,
    });
  }
};
