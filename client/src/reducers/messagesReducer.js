import {
  MESSAGES_FAILED,
  MESSAGES_LOADED,
  GET_MESSAGES,
  MESSAGES_LOADING,
} from "../actions/types";
const inintialState = {
  messages: [],
  loading: false,
};
export default function (state = inintialState, action) {
  switch (action.type) {
    case MESSAGES_LOADING:
      return {
        ...state,
        loading: true,
      };
  }
}
