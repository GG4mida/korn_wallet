import request from './request';

const info = () => {
  return request.get('/api/system/info');
};

export default {
  info,
};
