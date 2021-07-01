import produce from 'immer';
import TopicService from '@/services/topic';
import {ResponseCode} from '@/constants/enum';

const TopicModel = {
  namespace: 'topic',
  state: {
    list: [],
    detail: {},
  },
  effects: {
    *getList({payload}: any, {call, put}: any): any {
      const data = yield call(TopicService.getList, payload);
      const {code, content} = data;
      if (ResponseCode.SUCCESS === code) {
        yield put({
          type: 'setList',
          payload: content,
        });
      }
      return data;
    },
    *getDetail({payload}: any, {call, put}: any): any {
      const data = yield call(TopicService.getDetail, payload);
      const {code, content} = data;
      if (ResponseCode.SUCCESS === code) {
        yield put({
          type: 'setDetail',
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
    setDetail(state: any, action: any) {
      const nextState = produce(state, (draftState: any) => {
        draftState.detail = action.payload;
      });
      return nextState;
    },
  },
};

export default TopicModel;
