import axios from 'axios';

const axiosClient = axios.create({
  //   baseURL: '',
  timeout: 8000,
  headers: {
    'Authorization': 'Bearer ',
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
