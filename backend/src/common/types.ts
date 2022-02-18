export type TVoidFn<T> = (arg: T) => void;
export type TPromiseFn<T, R> = (arg: T) => Promise<R>
export type TUuid = string | null;