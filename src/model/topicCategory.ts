import produce from 'immer';
import TopicCategoryService from '@/services/topicCategory';
import {ResponseCode} from '@/constants/enum';

const TopicCategoryModel = {
  namespace: 'topicCategory',
  state: {
    list: [],
  },
  effects: {
    *getList({payload}: any, {call, put}: any): any {
      const data = yield call(TopicCategoryService.list, payload);
      const {code, content} = data;
      if (ResponseCode.SUCCESS === code) {
        yield put({
          type: 'setList',
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
  },
};

export default TopicCategoryModel;
