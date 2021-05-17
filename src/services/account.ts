import request from './request';

const login = (data: any) => {
  return request.post('/api/account/login', data);
};

const signup = (data: any) => {
  return request.post('/api/account/register', data);
};

const logout = () => {
  return request.post('/api/account/logout');
};

export default {
  login,
  signup,
  logout,
};
