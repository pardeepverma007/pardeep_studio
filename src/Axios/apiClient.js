import axios from "axios";
import { REACT_APP_BASE_URL } from "../constant/index";
const BASE_URL =
  REACT_APP_BASE_URL ||
  process.env.REACT_APP_BASE_URL ||
  "http://localhost:8080";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // You can add other headers like authorization token here
  },
});
const PostClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    // You can add other headers like authorization token here
  },
});

const _post = (url, data = {}, config = {}) => {
  console.log(url);
  return PostClient.post(url, data, config);
};
const _postLogin = (url, data = {}, config = {}) => {
  console.log(url);
  return apiClient.post(url, data, config);
};

export { _post, _postLogin };
