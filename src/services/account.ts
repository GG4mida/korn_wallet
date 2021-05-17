import request from './request';

const login = (username: string, password: string) => {
  return request.post('/api/account/login', {username, password});
};

const signup = (username: string, password: string, repassword: string) => {
  return request.post('/api/account/register', {
    username,
    password,
    repassword,
  });
};

export default {
  login,
  signup,
};
