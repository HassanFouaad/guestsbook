import axios from "axios";
import {
  MESSAGES_FAILED,
  MESSAGES_LOADED,
  MESSAGES_LOADING,
} from "../actions/types";

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
