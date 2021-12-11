import React from "react";
import { Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Routes from "../../routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Routes />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
