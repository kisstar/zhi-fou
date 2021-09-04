import axios from "axios";
import { baseURL } from "@/config";

const instance = axios.create({
  baseURL,
  timeout: 1000
});

export default instance;
