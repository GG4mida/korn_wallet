import produce from 'immer';
import UserService from '@/services/user';
import {ResponseCode} from '@/constants/enum';

const UserModel = {
  namespace: 'user',
  state: {
    info: {},
    holds: [],
    operates: [],
  },
  effects: {
    *info({payload}: any, {call, put}: any): any {
      const data = yield call(UserService.info, payload);
      const {code, content} = data;
      if (ResponseCode.SUCCESS === code) {
        yield put({
          type: 'setInfo',
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

    *operates({payload}: any, {call, put}: any): any {
      const data = yield call(UserService.operates, payload);
      const {code, content} = data;
      if (ResponseCode.SUCCESS === code) {
        yield put({
          type: 'setOperates',
          payload: content,
        });
      }
      return data;
    },

    *update({payload}: any, {call}: any): any {
      return yield call(UserService.update, payload);
    },

    *reset({payload}: any, {call}: any): any {
      return yield call(UserService.reset, payload);
    },
  },

  reducers: {
    setInfo(state: any, action: any) {
      const nextState = produce(state, (draftState: any) => {
        draftState.info = action.payload;
      });
      return nextState;
    },

    setHolds(state: any, action: any) {
      const nextState = produce(state, (draftState: any) => {
        draftState.holds = action.payload;
      });
      return nextState;
    },

    setOperates(state: any, action: any) {
      const nextState = produce(state, (draftState: any) => {
        draftState.operates = action.payload;
      });
      return nextState;
    },
  },
};

export default UserModel;
