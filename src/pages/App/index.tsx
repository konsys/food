import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Template } from '../../common/template';
import { getRoutes } from '../../routes';
import '../../config/theme/antd-theme.less';
import { usePosition } from '../../common/hooks/useGeoposition';

function App() {
  const position = usePosition();
  console.log(111111111111111, position);
  return (
    <BrowserRouter>
      <Template>
        <Routes>{getRoutes()}</Routes>
      </Template>
    </BrowserRouter>
  );
}

export default App;
