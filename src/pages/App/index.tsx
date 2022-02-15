import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Template } from '../../common/template';
import { getRoutes } from '../../routes';
// import '../../config/theme/antd-theme.less';

function App() {
  return (
    <BrowserRouter>
      <Template>
        <Routes>{getRoutes()}</Routes>
      </Template>
    </BrowserRouter>
  );
}

export default App;
