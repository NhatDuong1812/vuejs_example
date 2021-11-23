import axios from "axios";

export default axios.create({
  // baseURL: `http://localhost:8090/api/v1/`,
  baseURL: `http://10.252.10.155:8090/api/v1/`,
  headers: {
    "Content-type": "application/json"
  }
});