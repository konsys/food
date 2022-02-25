import {
  ColumnGroupType as AntdColumnGroupType,
  ColumnType as AntdColumnType,
} from 'antd/lib/table/interface';
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
export type TVoidFn<T = void> = (arg: T) => void;
export type TPromiseFn<T = void, R = void> = (arg: T) => Promise<R>;
export type TOnlyView = { onlyView: boolean };
export type TId = number | null | undefined;
export type TItemWithUuid<T> = T & { uuid: TUuid };
export type TObjectMap = Record<string, any>;

export type TKeyValue = { key: string; value: any };
export type TUuid = string;
