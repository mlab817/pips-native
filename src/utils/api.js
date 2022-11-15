import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Toast} from 'native-base';

const api = axios.create({
  baseURL: 'https://api.pips.da.gov.ph/api',
  headers: {
    common: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  },
});

api.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('TOKEN');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    Toast.show(JSON.stringify(error));
  },
);

api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (axios.isCancel(error)) {
      Toast.show('request cancelled');
    }

    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const response = await api.post('/auth/refresh');
      const {access_token} = response.data;
      api.config.headers['Authorization'] = 'Bearer ' + access_token;
      return api(originalRequest);
    }
    return Promise.reject(error);
  },
);

export default api;
