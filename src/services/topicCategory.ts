import request from './request';

const list = (data: any) => {
  return request.get('/api/topic/category/list', data);
};

export default {
  list,
};
