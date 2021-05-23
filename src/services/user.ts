import request from './request';

const info = () => {
  return request.get('/api/user/info');
};

const holds = () => {
  return request.get('/api/user/holds');
};

const operates = () => {
  return request.get('/api/user/operates');
};

export default {
  info,
  holds,
  operates,
};
