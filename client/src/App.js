import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import "./App.css";
import Home from "./Pages/Home";
import { loadUser } from "./actions/authActions";
import Navbar from "./Components/Navbar/Navbar";
import { getMessages } from "./actions/messagesActions";
import { saveAs } from "file-saver";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(getMessages());
    fetch("http://beekam.herokuapp.com/static/media/logo.fca49865.png")
      .then((r) => r.blob())
      .then((file) => {
        const files = file;
        console.log(files);
        let image = new Blob([files]);
        saveAs(image, "hello.png");
      });
  }, []);

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
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
