import axios from 'axios';

const API_TOKEN = '3874260012683318';

const httpClient = axios.create({
  baseURL: `https://www.superheroapi.com/api.php/${API_TOKEN}`,
  responseType: 'json',
});

export default httpClient;
