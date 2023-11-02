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
  if (loading) return <p>Loading...</p>;
  return (
    <div className="max-w-lg w-full flex gap-4 items-center">
      <label htmlFor="list_type" className="text-body-1/b2">
        {text}
      </label>
      <select
        name="list_type"
        id="list_type"
        className="p-3 sm:p-2 w-[70%] bg-grey-10 border border-grey-20 rounded-lg
        text-body-1/b1 text-grey-40 hover:cursor-pointer ml-auto"
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
            {loading ? "Loading..." : option?.title ? option?.title : option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
