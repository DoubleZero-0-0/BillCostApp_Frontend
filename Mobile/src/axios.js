// axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.atulchandradash.fun/api', // Replace with your backend API URL
  withCredentials: true

});

export default instance;
