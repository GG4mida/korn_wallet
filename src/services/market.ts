import request from './request';

const get = (data: any) => {
  return request.get('/api/market/get', data);
};

export default {
  get,
};
