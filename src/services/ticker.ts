const getFavorites = () => {
  return fetch('http://127.0.0.1:7070/api/ticker/favorite/list')
    .then(handleResponse)
    .then(user => {
      return user;
    });
};

const handleResponse = (response: any) => {
  return response.text().then((text: any) => {
    const data = text && JSON.parse(text);

    console.info('handle response:');
    console.info(data);

    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
};

export default {
  getFavorites,
};
