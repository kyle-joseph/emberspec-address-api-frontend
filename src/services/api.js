import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "http://127.0.0.1:8000/api/v1",
  //   withCredentials: true,
});

export default api;
