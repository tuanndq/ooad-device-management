import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const getToken = () => localStorage.getItem("token");

instance.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

export const getApi = (url) => {
  return instance.get(url);
};

export const postApi = (url, data) => {
  return instance.post(url, data);
};

export const putApi = (url, data) => {
  return instance.put(url, data);
};

export const deleteApi = (url) => {
  return instance.delete(url);
};
