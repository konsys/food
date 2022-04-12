import React, { memo } from 'react';
import { Routes } from 'react-router-dom';
import { Template } from '../../common/template';
import { getRoutes } from '../../routes';
import '../../config/theme/antd-theme.less';
import 'moment/locale/ru';

import './style/app.style.less';

const App = () => (
  <Template>
    <Routes>{getRoutes()}</Routes>
  </Template>
);

export default memo(App);
