import request from './request';

const all = (data: any) => {
  return request.get('/api/ticker/list', data);
};

const buyin = (data: any) => {
  return request.post('/api/ticker/buyin', data);
};

const sell = (data: any) => {
  return request.post('/api/ticker/sell', data);
};

const kline = (data: any) => {
  return request.get('/api/kline/get', data);
};

const favorites = () => {
  return request.get('/api/ticker/favorite/list');
};

const addFavorite = (data: any) => {
  return request.post('/api/ticker/favorite/add', data);
};

const delFavorite = (data: any) => {
  return request.post('/api/ticker/favorite/del', data);
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
