import React from 'react';
import { DictionaryList } from '../../core/dictionary/DictionaryList';
import { MenuTimeModel } from '../../store';

const model = MenuTimeModel;

export function MenuTimeListPage() {
  return <DictionaryList model={model} />;
}
