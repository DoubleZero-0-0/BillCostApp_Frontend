// axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080', // Replace with your backend API URL
  withCredentials: true

});

export default instance;
