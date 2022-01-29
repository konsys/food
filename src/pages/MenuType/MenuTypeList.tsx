import React from 'react';
import { DictionaryList } from '../../core/dictionary/DictionaryList';
import { MenuTypeModel } from '../../store';

const model = MenuTypeModel;

export const MenuTimeListPage = () => {
  return <DictionaryList model={model} modalTitle='Время меню' />;
};
