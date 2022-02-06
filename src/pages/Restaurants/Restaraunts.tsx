import React, { memo } from 'react';
import RestarauntsList from './containters/RestarauntsList/RestarauntsList';
import './restaraunts.less';

interface Props {}

function Restaraunts(props: Props) {
  const {} = props;

  return <RestarauntsList />;
}

export default memo(Restaraunts);
