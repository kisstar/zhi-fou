import axios from "axios";
import { baseURL } from "@/config";
import store from "@/store";

const token = localStorage.getItem("token");
const instance = axios.create({
  baseURL,
  timeout: 1000
});

instance.defaults.headers.common.Authorization = `Bearer ${token}`;

instance.interceptors.request.use(config => {
  store.commit("setLoading", true);

  return config;
});

instance.interceptors.response.use(res => {
  store.commit("setLoading", false);

  return res;
});

export default instance;
