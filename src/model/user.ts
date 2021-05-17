import produce from 'immer';
import UserService from '@/services/user';
import {ResponseCode} from '@/constants/enum';

const UserModel = {
  namespace: 'user',
  state: {
    full: {},
    holds: [],
  },
  effects: {
    *full({payload}: any, {call, put}: any): any {
      const data = yield call(UserService.full, payload);
      const {code, content} = data;
      if (ResponseCode.SUCCESS === code) {
        yield put({
          type: 'setFull',
          payload: {
            data: content,
          },
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
          payload: {
            data: content,
          },
        });
      }
      return data;
    },
  },

  reducers: {
    setFull(state: any, action: any) {
      const nextState = produce(state, (draftState: any) => {
        draftState.full = action.payload.data;
      });
      return nextState;
    },

    setHolds(state: any, action: any) {
      const nextState = produce(state, (draftState: any) => {
        draftState.holds = action.payload.data;
      });
      return nextState;
    },
  },
};

export default UserModel;
