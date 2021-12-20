import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { Template } from "../../common/template";
import { getRoutes } from "../../routes";
import "./style/app.style.scss";
import "./style/app.theme.scss";

function App() {
  // useLocation();
  return (
    <BrowserRouter>
      <Template specialHeaderTitle="Menu">
        <Routes>
          {/* TODO get title from routes */}
          {/* <Route path="*" element={<FoodMenu />} /> */}
          {getRoutes()}
        </Routes>
      </Template>
    </BrowserRouter>
  );
}

export default App;
