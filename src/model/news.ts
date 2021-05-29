import produce from 'immer';
import NewsService from '@/services/news';
import {ResponseCode} from '@/constants/enum';

const NewsModel = {
  namespace: 'news',
  state: {
    list: {
      data: [],
    },
  },
  effects: {
    *get({payload}: any, {call, put}: any): any {
      const data = yield call(NewsService.get, payload);
      const {code, content} = data;
      if (ResponseCode.SUCCESS === code) {
        const {pageIndex} = payload;

        if (pageIndex <= 1) {
          yield put({
            type: 'resetData',
          });
        }

        yield put({
          type: 'setData',
          payload: {
            data: content,
          },
        });
      }
      return data;
    },
  },

  reducers: {
    setData(state: any, action: any) {
      const nextState = produce(state, (draftState: any) => {
        const {data} = action.payload;
        draftState.list.data.push(...data.data);
      });
      return nextState;
    },

    resetData(state: any) {
      const nextState = produce(state, (draftState: any) => {
        draftState.list = {
          data: [],
        };
      });
      return nextState;
    },
  },
};

export default NewsModel;
