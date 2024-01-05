// axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://34.207.101.167', // Replace with your backend API URL
  withCredentials: true

});

export default instance;
