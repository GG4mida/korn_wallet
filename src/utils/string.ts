const getRandomString = (len = 12) => {
  const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = len; i > 0; --i) {
    result += str[Math.floor(Math.random() * str.length)];
  }
  return result;
};

export default {getRandomString};
