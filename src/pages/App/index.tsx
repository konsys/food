import React, { memo } from 'react';
import { Routes } from 'react-router-dom';
import { useGate } from 'effector-react';
import { Template } from '../../common/template';
import { getRoutes } from '../../routes';
import '../../config/theme/antd-theme.less';
import 'moment/locale/ru';

import './style/app.style.less';
import { ProfileGate } from '../../modules/user/store';

const App = () => {
  useGate(ProfileGate);
  return (
    <Template>
      <Routes>{getRoutes()}</Routes>
    </Template>
  );
};

export default memo(App);
