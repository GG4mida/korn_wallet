import produce from 'immer';
import CoinService from '@/services/coin';
import {ResponseCode} from '@/constants/enum';

const CoinModel = {
  namespace: 'coin',
  state: {
    all: [],
    favorites: [],
    kline: {},
  },
  effects: {
    *all({payload}: any, {call, put}: any): any {
      const data = yield call(CoinService.all, payload);
      const {code, content} = data;
      if (ResponseCode.SUCCESS === code) {
        yield put({
          type: 'setAll',
          payload: content,
        });
      }
      return data;
    },
    *favorites({payload}: any, {call, put}: any): any {
      const data = yield call(CoinService.favorites, payload);
      const {code, content} = data;
      if (ResponseCode.SUCCESS === code) {
        yield put({
          type: 'setFavorites',
          payload: content,
        });
      }
      return data;
    },
    *addFavorite({payload}: any, {call}: any): any {
      return yield call(CoinService.addFavorite, payload);
    },
    *delFavorite({payload}: any, {call}: any): any {
      return yield call(CoinService.delFavorite, payload);
    },
    *buyin({payload}: any, {call}: any): any {
      return yield call(CoinService.buyin, payload);
    },
    *sell({payload}: any, {call}: any): any {
      return yield call(CoinService.sell, payload);
    },
  },
  reducers: {
    setAll(state: any, action: any) {
      const nextState = produce(state, (draftState: any) => {
        draftState.all = action.payload;
      });
      return nextState;
    },

    setFavorites(state: any, action: any) {
      const nextState = produce(state, (draftState: any) => {
        draftState.favorites = action.payload;
      });
      return nextState;
    },
  },
};

export default CoinModel;
