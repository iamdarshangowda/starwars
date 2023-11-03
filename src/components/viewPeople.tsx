import React, { Dispatch, SetStateAction } from "react";
import Modal from "./Modal";
import { CloseIcon } from "./icons/closeIcon";
import Image from "next/image";
import getDateFormat from "../utils/getDateFormat";
import { COLOR } from "../utils/constants";

interface IViewPeople {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
  singlePerson: any;
  handleModalClose: () => void;
}

const ViewPeople = (props: IViewPeople) => {
  const { setShowModal, showModal, singlePerson, handleModalClose } = props;

  if (!singlePerson) return <div></div>;

  return (
    <Modal setShow={() => {}} show={showModal}>
      <div className="relative ">
        <Image
          key={singlePerson.name}
          src={`https://picsum.photos/id/${
            isNaN(Number(singlePerson.mass))
              ? 77
              : Math.floor(singlePerson.mass)
          }/300`}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full max-h-[250px] md:max-h-[300px] rounded-t-lg object-cover"
          alt={singlePerson.name}
        />
        <div
          onClick={handleModalClose}
          className="absolute bg-grey-0 rounded-full hover:cursor-pointer 
          p-1 top-4 right-4"
        >
          <CloseIcon />
        </div>
      </div>
      <div
        className="p-4 md:p-8"
        style={{
          background:
            COLOR[singlePerson?.skin_color?.split(",")[0]] ?? "#9fdbaf",
        }}
      >
        <div className="flex justify-between items-center py-2 md:py-4">
          <h1 className="text-heading-3/h1 text-center text-primaryDark">
            {singlePerson.name}
          </h1>
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <p className="text-body-1/b2 text-primaryLight">
            Height: {singlePerson.height}m
          </p>
          <p>Mass: {singlePerson.mass}kg</p>
          <p>Added on: {getDateFormat(singlePerson.created)}</p>
          <p>No. of Films: {singlePerson.films?.length}</p>
          <p>DOB: {singlePerson.birth_year}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ViewPeople;
