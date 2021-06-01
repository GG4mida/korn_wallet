import request from './request';

const info = () => {
  return request.get('/api/system/info');
};

const avatars = () => {
  return request.get('/api/system/avatars');
};

export default {
  info,
  avatars,
};
