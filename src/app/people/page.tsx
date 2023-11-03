"use client";
import React, { useEffect, useState } from "react";
import getAllPeople from "../../apis/getAllPeople";
import { useQuery } from "react-query";
import Card from "@components/Card";
import CardSkeleton from "@components/CardSkeleton";
import ViewPeople from "@components/viewPeople";
import SearchFilter from "@components/searchFilter";

const People = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [singlePerson, setSinglePerson] = useState<any>();

  const [filteredData, setFilteredData] = useState<any[]>([]);

  const {
    isLoading,
    error,
    data: peoplesList,
  } = useQuery({
    queryKey: ["peopleList", page],
    queryFn: () => getAllPeople(page),
  });

  useEffect(() => {
    if (peoplesList) setTotalPage(Math.round(peoplesList.count / 10));
  }, [peoplesList]);

  function handlePage() {
    function nextPage() {
      setPage((prev) => prev + 1);
    }

    function prevPage() {
      setPage((prev) => prev - 1);
    }

    return { nextPage, prevPage };
  }

  const handleSinglePerson = (people: number) => {
    setSinglePerson(people);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (peoplesList) setFilteredData(peoplesList.results);
  }, [peoplesList]);

  return (
    <div className="p-4">
      <SearchFilter
        setFilteredSearch={setFilteredData}
        filteredData={filteredData}
        peoplesList={peoplesList}
      />
      <div
        className={`py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20
      ${showModal ? "blur-sm" : "blur-0"} `}
      >
        {isLoading ? (
          new Array(10).fill("").map((n, index) => <CardSkeleton key={index} />)
        ) : filteredData.length ? (
          filteredData.map((people: any, index: number) => {
            return (
              <Card
                key={index}
                people={people}
                onClick={() => handleSinglePerson(people)}
              />
            );
          })
        ) : (
          <p className="text-center text-body-1/b2 text-grey-0 ">
            No People Found
          </p>
        )}
      </div>

      {/* Pagination */}
      <div className="mb-2 flex gap-2 sm:gap-6 justify-center items-center fixed bottom-0 left-0 right-0 ">
        <button
          className={`w-20 px-2 py-4 ${
            page === 1 ? "bg-grey-3 text-grey-2" : "bg-neon text-grey-9"
          } text-body-2/b2  rounded-lg`}
          disabled={page === 1}
          onClick={handlePage().prevPage}
        >
          Prev
        </button>
        <button
          className={`w-20 px-2 py-4 ${
            page === totalPage ? "bg-grey-3 text-grey-2" : "bg-neon text-grey-9"
          } text-body-2/b2  rounded-lg`}
          disabled={page === totalPage}
          onClick={handlePage().nextPage}
        >
          Next
        </button>
      </div>

      {/* Modal */}
      <ViewPeople
        singlePerson={singlePerson}
        showModal={showModal}
        setShowModal={setShowModal}
        handleModalClose={handleModalClose}
      />
    </div>
  );
};

export default People;
