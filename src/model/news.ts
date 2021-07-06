import produce from 'immer';
import NewsService from '@/services/news';
import {ResponseCode} from '@/constants/enum';

const NewsModel = {
  namespace: 'news',
  state: {
    list: [],
  },
  effects: {
    *get({payload}: any, {call, put}: any): any {
      const data = yield call(NewsService.get, payload);
      const {code, content} = data;
      if (ResponseCode.SUCCESS === code) {
        yield put({
          type: 'setData',
          payload: content,
        });
      }
      return data;
    },
  },
  reducers: {
    setData(state: any, action: any) {
      const nextState = produce(state, (draftState: any) => {
        draftState.list = action.payload;
      });
      return nextState;
    },
  },
};

export default NewsModel;
