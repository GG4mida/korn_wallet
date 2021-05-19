import produce from 'immer';
import TickerService from '@/services/ticker';
import {ResponseCode} from '@/constants/enum';

const TickerModel = {
  namespace: 'ticker',
  state: {
    all: [],
    favorites: [],
    kline: {},
  },
  effects: {
    *all({payload}: any, {call, put}: any): any {
      const data = yield call(TickerService.all, payload);
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
      const data = yield call(TickerService.favorites, payload);
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
      return yield call(TickerService.addFavorite, payload);
    },
    *delFavorite({payload}: any, {call}: any): any {
      return yield call(TickerService.delFavorite, payload);
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

export default TickerModel;
