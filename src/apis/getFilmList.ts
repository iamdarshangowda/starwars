import { get } from "../config/axiosClient";

const getAllFilterBy = async (text: string) => {
  try {
    const people = await get(text);
    if (text === "films") {
      return people.data.results.map((film: any) => ({
        title: film.title,
        url: film.url,
      }));
    } else {
      return people.data.results.map((species: any) => ({
        title: species.name,
        url: species.url,
      }));
    }
  } catch (error) {
    console.log(error);
  }
};

export default getAllFilterBy;
