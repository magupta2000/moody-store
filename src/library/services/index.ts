import axios, { AxiosInstance } from "axios";

const baseURL = 'https://fakestoreapi.com'

export const ServiceInstance: AxiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  });

ServiceInstance.interceptors.response.use(
function (response) {
    return response.data;
},
function (error) {
    const { data } = error?.response;
    if (data && data.message) {
    }
    return Promise.reject(data.message);
}
);