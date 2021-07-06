import request from './request';

const get = (data: any) => {
  return request.get('/api/exchange/get', data);
};

export default {
  get,
};
