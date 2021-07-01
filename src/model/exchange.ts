import produce from 'immer';
import ExchangeService from '@/services/exchange';
import {ResponseCode} from '@/constants/enum';

const ExchangeModel = {
  namespace: 'exchange',
  state: {
    exchange: '',
  },
  effects: {
    *get({payload}: any, {call, put}: any): any {
      const data = yield call(ExchangeService.get, payload);
      const {code, content} = data;
      if (ResponseCode.SUCCESS === code) {
        yield put({
          type: 'setExchange',
          payload: content,
        });
      }
      return data;
    },
  },
  reducers: {
    setExchange(state: any, action: any) {
      const nextState = produce(state, (draftState: any) => {
        draftState.exchange = action.payload;
      });
      return nextState;
    },
  },
};

export default ExchangeModel;
