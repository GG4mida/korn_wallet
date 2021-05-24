import request from './request';

const all = (data: any) => {
  return request.get('/api/coin/list', data);
};

const buyin = (data: any) => {
  return request.post('/api/coin/buyin', data);
};

const sell = (data: any) => {
  return request.post('/api/coin/sell', data);
};

const favorites = () => {
  return request.get('/api/coin/favorite/list');
};

const addFavorite = (data: any) => {
  return request.post('/api/coin/favorite/add', data);
};

const delFavorite = (data: any) => {
  return request.post('/api/coin/favorite/del', data);
};

const kline = (data: any) => {
  return request.get('/api/kline/get', data);
};

export default {
  all,
  buyin,
  sell,
  kline,
  favorites,
  addFavorite,
  delFavorite,
};
