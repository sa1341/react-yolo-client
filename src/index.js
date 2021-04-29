import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Yolo from "layouts/Yolo";
import LoginForm from "components/Login/LoginForm";

const hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={hist}>
      <Switch>
        <Route path="/yolo" component={Yolo} />
        <Route path="/test" component={App} />
        <Route path="/login" component={LoginForm} />
        <Redirect from="/" to="/yolo" />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
