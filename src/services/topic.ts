import request from './request';

const list = (data: any) => {
  return request.get('/api/topic/list', data);
};

export default {
  list,
};
