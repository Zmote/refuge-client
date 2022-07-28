import Axios from "axios";

const BASE_URL = "http://localhost:8080";

const axiosConfig = {
  baseURL: BASE_URL,
  timeout: 30000,
};

export const AXIOS = Axios.create(axiosConfig);

export default {
  async login(username: string, password: string) {
    return await AXIOS.post("/auth/login", {
      username: username,
      password: password,
    });
  },
  async signup(username: string, password: string) {
    return await AXIOS.post("/auth/signup", {
      username: username,
      password: password,
    });
  },
};
