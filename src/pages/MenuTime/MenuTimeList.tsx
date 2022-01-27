import React from 'react';
import { DictionaryList } from '../../common/components/dictionary/DictionaryList';
import { MenuTypeModel } from '../../store';

const model = MenuTypeModel;

export const MenuTimeListPage = () => {
  return <DictionaryList model={model} />;
};
