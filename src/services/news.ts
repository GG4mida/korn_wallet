import request from './request';

const get = (data: any) => {
  return request.get('/api/news/get', data);
};

export default {
  get,
};
