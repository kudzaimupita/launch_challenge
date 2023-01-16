import axios from "axios";

const BaseService = axios.create({
  timeout: 60000,
  baseURL: "https://api.spacex.land/graphql/",
});

BaseService.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

BaseService.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default BaseService;
