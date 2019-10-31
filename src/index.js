import React from "react";
import ReactDOM from "react-dom";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

LogRocket.init("qlmqem/dev-park-explorer");

// after calling LogRocket.init()
setupLogRocketReact(LogRocket);

// This is an example script - don't forget to change it!
LogRocket.identify("HOMEBOY", {
  name: "Jonny Bolt",
  email: "jbolt@mailinator.com",

  // Add your own custom user variables here, ie:
  subscriptionType: "supreme"
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
