import React, { memo, ReactNode } from 'react';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import './content.less';

interface Props {
  children: ReactNode;
}

function Content(props: Props) {
  const { children } = props;

  return (
    <main className="page-content">
      <Breadcrumbs />
      {children}
    </main>
  );
}

export default memo(Content);
