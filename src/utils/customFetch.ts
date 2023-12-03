import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'https://65574968bd4bcef8b612628d.mockapi.io/dev-jobs',
});

export default customFetch;
