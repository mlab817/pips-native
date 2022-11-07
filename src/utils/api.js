import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.pips.da.gov.ph/api',
  // headers: {
  //   common: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  // },
});

// api.interceptors.request.use(
//   function (config) {
//     return config;
//   },
//   err => console.error(err),
// );

// api.interceptors.response.use(
//   function (config) {
//     return config;
//   },
//   err => console.error(err),
// );

export default api;
