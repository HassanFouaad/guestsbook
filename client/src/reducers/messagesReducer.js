import {
  MESSAGES_FAILED,
  MESSAGES_LOADED,
  GET_MESSAGES,
  MESSAGES_LOADING,
} from "../actions/types";
const inintialState = {
  messages: [],
  loading: false,
  error: true,
};
export default function (state = inintialState, action) {
  switch (action.type) {
    case MESSAGES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case MESSAGES_LOADED:
      return {
        ...state,
        messages: action.payload,
        loading: false,
        error: false,
      };
    case MESSAGES_FAILED:
      return { ...state, messages: [], loading: false, error: true };
  }
}
