import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';

export const MenuItem = (): ReactElement => {
  const { id } = useParams();
  return <>MenuItem {id}</>;
};
