import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/e-commerce-website-2f2ee/us-central1/api'
});

export default instance;