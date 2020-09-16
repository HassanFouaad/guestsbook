import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-left"
        getState={(state) => state.toastr}
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      ></ReduxToastr>
    </Provider>
  );
}

export default App;
