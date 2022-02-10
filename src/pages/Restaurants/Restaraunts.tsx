import { useStore } from 'effector-react';
import React, { memo } from 'react';
import { RestarauntModel } from '../../store';
import RestarauntsList from './containters/RestarauntsList/RestarauntsList';
import './restaraunts.less';

const { $listStore } = RestarauntModel;

function Restaraunts() {
  const { items } = useStore($listStore);

  return <RestarauntsList items={items} />;
}

export default memo(Restaraunts);
