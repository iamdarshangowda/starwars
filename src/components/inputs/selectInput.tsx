import LoadingSpinner from "@components/icons/loadingSpinner";
import React from "react";

interface ISelectProps {
  optionsList: any;
  onChange: any;
  value: string;
  text: string;
  loading?: boolean;
}

const SelectInput = (props: ISelectProps) => {
  const { optionsList, onChange, value, text, loading } = props;

  if (loading)
    return (
      <div className=" flex gap-1 w-full">
        <LoadingSpinner />
        <p className="text-grey-0">Getting Lists...</p>
      </div>
    );

  return (
    <div className="max-w-lg w-full flex gap-4 items-center">
      <label htmlFor="list_type" className="text-body-1/b2 text-grey-0">
        {text}
      </label>
      <select
        name="list_type"
        id="list_type"
        className="p-2 w-full bg-grey-10 border border-grey-20 rounded-lg
        text-body-1/b1 text-grey-40 hover:cursor-pointer "
        onChange={onChange}
        value={value}
        disabled={loading}
      >
        {optionsList.map((option: any) => (
          <option
            value={
              option?.title
                ? option.title.toLocaleLowerCase()
                : option.toLocaleLowerCase()
            }
            className="text-grey-60 text-body-1/b2 p-2"
            key={
              option?.title
                ? option.title.toLocaleLowerCase()
                : option.toLocaleLowerCase()
            }
          >
            {option?.title ? option?.title : option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
