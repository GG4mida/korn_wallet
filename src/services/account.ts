import request from './request';

const login = (username: string, password: string) => {
  return request.post('/api/account/login', {username, password});
};

export default {
  login,
};
