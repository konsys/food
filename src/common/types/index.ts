import {
  ColumnGroupType as AntdColumnGroupType,
  ColumnType as AntdColumnType,
} from 'antd/lib/table/interface';
import { Effect } from 'effector';
import { TypeOrmDeleteResult } from '../api/types';
import { TColumnKeys } from '../form/columnsNamesGenerator';

export type ColumnType<RecordType> = Omit<AntdColumnType<RecordType>, 'dataIndex'> & {
  dataIndex?: TColumnKeys;
};
export type ColumnGroupType<RecordType> = Omit<AntdColumnGroupType<RecordType>, 'children'> & {
  children: ColumnsType<RecordType>;
};

export type ColumnsType<RecordType> = (ColumnGroupType<RecordType> | ColumnType<RecordType>)[];

export type TWithKey<T, Key = string> = T & { _key: Key };
export type TLoadById = (id: number | string) => void;
export type TVoidFn<T extends any = void> = (arg: T) => void;
export type TPromiseFn<T extends any = void, R = void> = (arg: T) => Promise<R>;
export type TOnlyView = { onlyView: boolean };
export type TId = number | null | undefined;
export type TWithId = { id: TId };
export type TItemWithId<T> = T & { id: TId };
