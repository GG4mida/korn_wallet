import produce from 'immer';
import SystemService from '@/services/system';
import {ResponseCode, ThemeType} from '@/constants/enum';

export type State = {
  initialized: boolean;
  info: object;
  avatars: Array<{}>;
  theme: ThemeType;
};
export interface IModel {
  namespace: 'system';
  state: State;
  effects: any;
  reducers: any;
}
const SystemModel: IModel = {
  namespace: 'system',
  state: {
    initialized: false,
    info: {},
    avatars: [],
    theme: ThemeType.LIGHT,
  },
  effects: {
    *info({payload}: any, {call, put}: any): any {
      const data = yield call(SystemService.info, payload);
      const {code, content} = data;
      if (ResponseCode.SUCCESS === code) {
        yield put({
          type: 'setInfo',
          payload: content,
        });
      }
      return data;
    },
    *avatars({payload}: any, {call, put}: any): any {
      const data = yield call(SystemService.avatars, payload);
      const {code, content} = data;
      if (ResponseCode.SUCCESS === code) {
        yield put({
          type: 'setAvatars',
          payload: content,
        });
      }
      return data;
    },
  },
  reducers: {
    setInfo(state: any, action: any) {
      const nextState = produce(state, (draftState: any) => {
        draftState.info = action.payload;
      });
      return nextState;
    },
    setAvatars(state: any, action: any) {
      const nextState = produce(state, (draftState: any) => {
        draftState.avatars = action.payload;
      });
      return nextState;
    },
    setTheme(state: any, action: any) {
      const nextState = produce(state, (draftState: any) => {
        draftState.theme = action.payload.theme;
      });
      return nextState;
    },
    setInitialized(state: any, action: any) {
      const nextState = produce(state, (draftState: any) => {
        draftState.initialized = action.payload;
      });
      return nextState;
    },
  },
};

export default SystemModel;
