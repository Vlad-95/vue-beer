import axios from 'axios';

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  // withCredentials: true,
  validateStatus(status) {
    /*
      401 Unauthenticated
      405 Method Not Allowed
      408 Request Timeout
      429 Too Many Requests
     */
    return ![401, 405, 408, 429].includes(status) && status < 500;
  },
});
