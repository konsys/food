import React from 'react';
import { DictionaryList } from '../../core/dictionary/DictionaryList';
import { MenuTypeModel } from '../../store';

const model = MenuTypeModel;

export function MenuTimeListPage() {
  return <DictionaryList model={model} />;
}
