import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.opensea.io/api/v2",
});

export default axiosInstance;
