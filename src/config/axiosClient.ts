import axios from "axios";
const URL = process.env.NEXT_PUBLIC_API_URL;
const AUTH_URL = process.env.STARWARS_BACKEND_PORT;

export const get = async (apiEndpoint: string) => {
  return axios.get(`${URL}/${apiEndpoint}`, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
};

export const noAuthPost = (apiURL: string, data: any) => {
  return axios.post(`${AUTH_URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
};

export const postLogin = (apiURL: string, data: any) => {
  return axios.post(`${AUTH_URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
};
