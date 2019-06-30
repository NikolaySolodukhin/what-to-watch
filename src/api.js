import axios from 'axios';

export const createAPI = () => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/wtw`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (error) => {
    if (error.response.status === 403) {
      history.pushState(null, null, `/login`);
      return;
    }
    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
