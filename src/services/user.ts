import request from './request';

const full = () => {
  return request.get('/api/user/full');
};

const holds = () => {
  return request.get('/api/user/holds');
};

export default {
  full,
  holds,
};
