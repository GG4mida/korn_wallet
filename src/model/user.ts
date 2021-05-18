import produce from 'immer';
import UserService from '@/services/user';
import {ResponseCode} from '@/constants/enum';

const UserModel = {
  namespace: 'user',
  state: {
    base: {},
    full: {},
    holds: [],
  },
  effects: {
    *base({payload}: any, {call, put}: any): any {
      const data = yield call(UserService.base, payload);
      const {code, content} = data;
      if (ResponseCode.SUCCESS === code) {
        yield put({
          type: 'setBase',
          payload: content,
        });
      }
      return data;
    },

    *full({payload}: any, {call, put}: any): any {
      const data = yield call(UserService.full, payload);
      const {code, content} = data;
      if (ResponseCode.SUCCESS === code) {
        yield put({
          type: 'setFull',
          payload: content,
        });
      }
      return data;
    },

    *holds({payload}: any, {call, put}: any): any {
      const data = yield call(UserService.holds, payload);
      const {code, content} = data;
      if (ResponseCode.SUCCESS === code) {
        yield put({
          type: 'setHolds',
          payload: content,
        });
      }
      return data;
    },
  },

  reducers: {
    setBase(state: any, action: any) {
      const nextState = produce(state, (draftState: any) => {
        draftState.base = action.payload;
      });
      return nextState;
    },

    setFull(state: any, action: any) {
      const nextState = produce(state, (draftState: any) => {
        draftState.full = action.payload;
      });
      return nextState;
    },

    setHolds(state: any, action: any) {
      const nextState = produce(state, (draftState: any) => {
        draftState.holds = action.payload;
      });
      return nextState;
    },
  },
};

export default UserModel;
