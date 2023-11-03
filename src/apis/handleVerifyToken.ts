import axios from "axios";
import { getVerify } from "../config/axiosClient";

const verifyToken = async () => {
  let tokenValid = false;
  try {
    await getVerify("user/verify").then((data) => {
      tokenValid = data.data.tokenValid;
    });
  } catch (err: any) {
    console.log(err.message, "token expired");
    tokenValid = await getRefreshToken();
  } finally {
    return tokenValid;
  }
};

const getRefreshToken = async () => {
  const refreshToken = JSON.parse(
    localStorage.getItem("starwarsRefreshToken") || ""
  );

  if (!refreshToken) return false;

  try {
    const AUTH_URL = process.env.STARWARS_BACKEND_PORT;
    const rs = await axios.get(`${AUTH_URL}/user/refresh`, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    const { accessToken, message, tokenValid } = rs.data;
    localStorage.setItem("starwarsToken", JSON.stringify(accessToken));
    console.log(message);
    return tokenValid;
  } catch (error) {
    return Promise.reject(false);
  }
};

export default verifyToken;
