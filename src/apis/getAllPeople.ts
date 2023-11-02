import { get } from "../config/axiosClient";

const getAllPeople = async () => {
  try {
    const people = await get("people");
    return people;
  } catch (error) {
    console.log(error);
  }
};

export default getAllPeople;
