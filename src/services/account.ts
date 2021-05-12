const login = (username: string, password: string) => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, password}),
  };

  return fetch('http://127.0.0.1:7070/api/account/login', requestOptions)
    .then(handleResponse)
    .then(user => {
      return user;
    });
};

const handleResponse = (response: any) => {
  return response.text().then((text: any) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
};

export default {
  login,
};
