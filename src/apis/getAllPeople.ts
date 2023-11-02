import { getPeople } from "../config/axiosClient";

const getAllPeople = async (page?: number) => {
  try {
    const people = await getPeople(`people/?page=${page}`);
    return people.data;
  } catch (error) {
    console.log(error);
  }
};

export default getAllPeople;
