import React from "react";
import { Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Routes from "../../routes";
import "./style/app.style.scss";
import "./style/app.theme.scss";

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
