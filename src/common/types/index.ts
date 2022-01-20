export type TWithKey<T, Key = string> = T & { _key: Key };
export type TLoadById = (id: number | string) => void;
export type TVoidFn<T extends any = void> = (arg: T) => void;
export type TPromiseFn<T extends any = void, R = void> = (arg: T) => Promise<R>;
export type TOnlyView = { onlyView: boolean };
export type TId = number | null | undefined;
export type TWithId = { id: TId };
