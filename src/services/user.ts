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

const update = (data: any) => {
  return request.post('/api/user/update', data);
};

export default {
  info,
  holds,
  operates,
  update,
};
