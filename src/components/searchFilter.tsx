import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import SelectInput from "./inputs/selectInput";
import getAllFilterBy from "../apis/getFilmList";
import { useQuery } from "react-query";

const FILTER_BY = ["None", "Films", "Species"];

interface ISearchProp {
  setFilteredSearch: Dispatch<SetStateAction<any[]>>;
  filteredData: any;
  peoplesList: any;
}

const SearchFilter = (props: ISearchProp) => {
  const { setFilteredSearch, peoplesList, filteredData } = props;
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  const [filterBy, setFilterBy] = useState("None");
  const [selectBy, setSelectBy] = useState("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchText(value);
  };

  const {
    isLoading,
    error,
    data: selectList,
  } = useQuery({
    queryKey: ["peopleList", filterBy],
    queryFn: () => getAllFilterBy(filterBy.toLocaleLowerCase()),
    enabled: filterBy.toLocaleLowerCase() !== "none",
  });

  useEffect(() => {
    if (!peoplesList?.results) return;

    if (!searchText && filterBy.toLocaleLowerCase() === "none") {
      console.log("here");
      setSelectBy("");
      setFilteredSearch(peoplesList.results || []);
      return;
    }

    if (searchText && filterBy.toLocaleLowerCase() !== "none") {
      console.log("here 2");
      // Search Filter
      let updated = peoplesList.results.filter((person: any) =>
        person.name.toLowerCase().includes(searchText.toLocaleLowerCase())
      );

      // Filter By
      if (selectList?.length) {
        const filterPersonList: any = selectList.find(
          (list: any) => list.title.toLowerCase() === selectBy
        );
        updated = updated.filter((people: any) =>
          people[filterBy.toLocaleLowerCase()].includes(filterPersonList.url)
        );
      }

      setFilteredSearch(updated);
      return;
    }

    if (searchText && filterBy.toLocaleLowerCase() === "none") {
      console.log("here 3");
      const filtered = peoplesList.results.filter((person: any) =>
        person.name.toLowerCase().includes(searchText.toLocaleLowerCase())
      );
      setFilteredSearch(filtered);
      return;
    }

    if (
      !searchText &&
      filterBy.toLocaleLowerCase() !== "none" &&
      selectList?.length
    ) {
      console.log("here 4");
      const filterPersonList: any = selectList.find(
        (list: any) => list.title.toLowerCase() === selectBy
      );

      let selectByFilter = peoplesList.results;
      if (filterPersonList?.url) {
        selectByFilter = selectByFilter.filter((people: any) =>
          people[filterBy.toLocaleLowerCase()]?.includes(filterPersonList?.url)
        );
      }

      setFilteredSearch(selectByFilter);
    }
  }, [searchText, peoplesList, filterBy, selectBy]);

  const handleFilterBy = (e: any) => {
    setFilterBy(e.target.value);
  };

  const handleSelectBy = (e: any) => {
    setSelectBy(e.target.value);
  };

  return (
    <div className="flex justify-between flex-wrap gap-2">
      <input
        type="text"
        value={searchText}
        onChange={handleSearch}
        className="p-2 border-none rounded-lg"
        placeholder="search here..."
      />
      <div className="flex gap-8 items-center">
        <SelectInput
          optionsList={FILTER_BY}
          onChange={handleFilterBy}
          value={filterBy}
          text={"Filter By"}
        />
        <SelectInput
          optionsList={selectList || []}
          onChange={handleSelectBy}
          value={selectBy}
          text={"Select By"}
          loading={loading || isLoading}
        />
      </div>
    </div>
  );
};

export default SearchFilter;
