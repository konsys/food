import React, { memo } from 'react';
import { BrowserRouter, Routes, useLocation } from 'react-router-dom';
import { Template } from '../../common/template';
import { getRoutes } from '../../routes';
import '../../config/theme/antd-theme.less';
import 'moment/locale/ru';

import './style/app.style.less';
import { useBreadcrumbs } from '../../modules/breadcrumbs/useBreadcrumbs';

const App = () => {
  useBreadcrumbs();

  return (
    <Template>
      <Routes>{getRoutes()}</Routes>
    </Template>
  );
};

export default memo(App);
