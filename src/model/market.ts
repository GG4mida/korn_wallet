import produce from 'immer';
import MarketService from '@/services/market';
import {ResponseCode} from '@/constants/enum';

const MarketModel = {
  namespace: 'market',
  state: {
    list: {},
  },
  effects: {
    *get({payload}: any, {call, put}: any): any {
      const data = yield call(MarketService.get, payload);
      const {code, content} = data;
      if (ResponseCode.SUCCESS === code) {
        yield put({
          type: 'setList',
          payload: content,
        });
      }
      return data;
    },
  },

  reducers: {
    setList(state: any, action: any) {
      const nextState = produce(state, (draftState: any) => {
        draftState.list = action.payload;
      });
      return nextState;
    },
  },
};

export default MarketModel;
