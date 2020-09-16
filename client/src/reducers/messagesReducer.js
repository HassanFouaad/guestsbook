import {
  MESSAGES_FAILED,
  MESSAGES_LOADED,
  MESSAGES_LOADING,
  ADD_MESSAGE,
  ADD_MESSAGE_FAILED,
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_LOADING,
  DELETE_MESSAGE,
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
    case ADD_MESSAGE_LOADING:
      return { ...state, loading: true };
    case MESSAGES_FAILED:
      return { ...state, messages: [], loading: false, error: true };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
        loading: false,
        error: false,
      };
    case ADD_MESSAGE_FAILED:
      return {
        ...state,
        loading: false,
      };
    case DELETE_MESSAGE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
