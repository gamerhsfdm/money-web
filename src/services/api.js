import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.3.10:3001"
});

export default api;

//http://192.168.3.10:3001