import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://catalog-redux-fake-api.vercel.app',
});
