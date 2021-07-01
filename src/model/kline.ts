import produce from 'immer';
import KlineService from '@/services/kline';
import {Storage} from '@/utils';
import {ResponseCode} from '@/constants/enum';

const KlineModel = {
  namespace: 'kline',
  state: {
    data: {},
  },
  effects: {
    *get({payload}: any, {call, put}: any): any {
      const data = yield call(KlineService.get, payload);
      const {code, content} = data;
      if (ResponseCode.SUCCESS === code) {
        const {coin, type} = payload;
        const dataKey = `${coin}${type}`;
        yield put({
          type: 'setData',
          payload: {
            data: content,
            key: dataKey,
          },
        });
        Storage.setItem(dataKey, true, 30 * 1000);
      }
      return data;
    },
  },
  reducers: {
    setData(state: any, action: any) {
      const nextState = produce(state, (draftState: any) => {
        const {data, key} = action.payload;
        draftState.data[key] = data;
      });
      return nextState;
    },
  },
};

export default KlineModel;
