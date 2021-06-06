import produce from 'immer';
import TopicService from '@/services/topic';
import {ResponseCode} from '@/constants/enum';

const TopicModel = {
  namespace: 'topic',
  state: {
    list: {},
  },
  effects: {
    *get({payload}: any, {call, put}: any): any {
      const data = yield call(TopicService.list, payload);
      const {code, content} = data;
      if (ResponseCode.SUCCESS === code) {
        yield put({
          type: 'setList',
          payload: {
            data: content,
          },
        });
      }
      return data;
    },
  },

  reducers: {
    setList(state: any, action: any) {
      const nextState = produce(state, (draftState: any) => {
        const {data} = action.payload;
        draftState.list = data;
      });
      return nextState;
    },
  },
};

export default TopicModel;
