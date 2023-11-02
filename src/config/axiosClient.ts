import axios from "axios";
const URL = process.env.NEXT_PUBLIC_API_URL;

export const get = async (apiEndpoint: string, params?: any, options?: any) => {
  return axios.get(`${URL}/${apiEndpoint}`, {
    ...options,
    params,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
};
