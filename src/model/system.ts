import produce from 'immer';
import SystemService from '@/services/system';
import {ResponseCode} from '@/constants/enum';

const SystemModel = {
  namespace: 'system',
  state: {
    initialized: false,
    info: {},
  },
  effects: {
    *info({payload}: any, {call, put}: any): any {
      const data = yield call(SystemService.info, payload);
      const {code, content} = data;
      if (ResponseCode.SUCCESS === code) {
        yield put({
          type: 'setInfo',
          payload: {
            data: content,
          },
        });
      }
      return data;
    },
  },

  reducers: {
    setInfo(state: any, action: any) {
      const nextState = produce(state, (draftState: any) => {
        draftState.info = action.payload.data;
      });
      return nextState;
    },

    setInitialized(state: any, action: any) {
      const nextState = produce(state, (draftState: any) => {
        draftState.initialized = action.payload.data;
      });
      return nextState;
    },
  },
};

export default SystemModel;
