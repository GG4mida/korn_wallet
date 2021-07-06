import request from './request';

const get = (data: any) => {
  return request.get('/api/kline/get', data);
};

export default {
  get,
};
