import { getVerify } from "../config/axiosClient";

const verifyToken = async () => {
  let tokenValid = false;
  try {
    await getVerify("user/verify").then((data) => {
      tokenValid = data.data.tokenValid;
    });
  } catch (err: any) {
    console.log(err.message);
  } finally {
    return tokenValid;
  }
};

export default verifyToken;
