import React from "react";
import { Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Template } from "../../common/template";
import Routes from "../../routes";
import "./style/app.style.scss";
import "./style/app.theme.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* TODO get title from routes */}
        <Template specialHeaderTitle="Menu">
          <Routes />
        </Template>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
