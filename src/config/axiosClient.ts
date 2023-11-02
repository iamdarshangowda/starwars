import axios from "axios";
const URL = process.env.NEXT_PUBLIC_API_URL;

export const get = async (apiEndpoint: string) => {
  return axios.get(`${URL}/${apiEndpoint}`, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
};
