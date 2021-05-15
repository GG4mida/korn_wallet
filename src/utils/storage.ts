import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';
import {StorageKeys} from '@/constants/enum';

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24 * 365,
  enableCache: true,
  sync: {
    [StorageKeys.USER_TOKEN]: async () => {
      return '';
    },
  },
});

const setItem = (key: string, data: any, expires: number = 0) => {
  const saveData: any = {
    key,
    data,
  };
  if (expires && expires > 0) {
    saveData.expires = expires;
  }
  return storage.save(saveData);
};

const getItem = (key: string) => {
  return storage.load({
    key: key,
    syncInBackground: false,
  });
};

const removeItem = (key: string) => {
  return storage.remove({
    key: key,
  });
};

export default {
  setItem,
  getItem,
  removeItem,
};
