import request from './request';

const getList = (data: any) => {
  return request.get('/api/topic/list', data);
};

const getDetail = (data: any) => {
  return request.get('/api/topic/list', data);
};

export default {
  getList,
  getDetail,
};
