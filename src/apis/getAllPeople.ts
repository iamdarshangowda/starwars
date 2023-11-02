import { get } from "../config/axiosClient";

const getAllPeople = async (page?: number) => {
  try {
    const people = await get(`people/?page=${page}`);
    return people.data;
  } catch (error) {
    console.log(error);
  }
};

export default getAllPeople;
