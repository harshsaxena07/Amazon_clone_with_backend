import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/challenge-c2893/us-central1/api' // Update to your Firebase endpoint
});

export default instance;
