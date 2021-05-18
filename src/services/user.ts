import request from './request';

const base = () => {
  return request.get('/api/user/base');
};

const full = () => {
  return request.get('/api/user/full');
};

const holds = () => {
  return request.get('/api/user/holds');
};

export default {
  base,
  full,
  holds,
};
