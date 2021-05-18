import produce from 'immer';
import AccountService from '@/services/account';
import {ResponseCode, StorageKeys} from '@/constants/enum';
import Storage from '@/utils/storage';

const AccountModel = {
  namespace: 'account',
  state: {
    token: null,
  },
  effects: {
    *login({payload}: any, {call, put}: any): any {
      const data = yield call(AccountService.login, payload);
      const {code, content} = data;
      if (ResponseCode.SUCCESS === code) {
        const {token} = content;

        Storage.setItem(StorageKeys.USER_TOKEN, token);

        yield put({
          type: 'setToken',
          payload: token,
        });
      }

      return data;
    },

    *signup({payload}: any, {call}: any): any {
      return yield call(AccountService.signup, payload);
    },

    *logout({payload}: any, {call, put}: any): any {
      const data = yield call(AccountService.logout, payload);
      yield put({
        type: 'setToken',
        payload: null,
      });
      return data;
    },
  },

  reducers: {
    setToken(state: any, action: any) {
      const nextState = produce(state, (draftState: any) => {
        draftState.token = action.payload;
      });
      return nextState;
    },
  },
};

export default AccountModel;
