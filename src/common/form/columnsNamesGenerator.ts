export type TColumnKeys = (string | number)[] & string;

export function columnsNamesGenerator<T extends Record<string, any>>() {
  function columnKeys<FirstItem extends keyof T & string>(firstItem: FirstItem): TColumnKeys;

  function columnKeys(firstKey: unknown): TColumnKeys {
    return [firstKey] as unknown as TColumnKeys;
  }

  return columnKeys;
}
