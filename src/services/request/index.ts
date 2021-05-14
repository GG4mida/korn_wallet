import axios from 'axios';
import {Toaster} from '@/utils';
import Config from 'react-native-config';

const checkResponse = (response: any) => {
  if (!response) {
    Toaster.show('请求异常，请稍候重试');
    return null;
  }
  const {data}: any = response;
  if (data) {
    const {code, content}: any = data;
    if (code !== 200) {
      Toaster.show(content);
    }
  }
  return data;
};

axios.defaults.timeout = 100000;
axios.defaults.baseURL = Config.API_URL;

axios.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/json',
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  response => {
    return checkResponse(response);
  },
  error => {
    Toaster.show(`请求异常：${error.message}`);
  },
);

const get = (url: string, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const post = (url: string, data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default {
  get,
  post,
};
