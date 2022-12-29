export enum STORAGE_KEYS {
  JOBS = '@@jobs',
}

export class StorageDevice {
  static setItem(key: STORAGE_KEYS, value: string) {
    localStorage.setItem(key, value);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static getItem(key: STORAGE_KEYS, initialState : any, parser : boolean) {

    const data = () => {
      const found = localStorage.getItem(key)

      return found ?? initialState;
    }

    return parser && typeof data() === 'string'  ? JSON.parse(data()) : data()

  }
}
