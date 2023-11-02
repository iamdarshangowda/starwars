import React from "react";

const CardSkeleton = () => {
  return (
    <div className="rounded-lg shadow-sm  animate-pulse">
      <div className="w-full h-[310px] bg-grey-1 rounded-t-lg"></div>
      <div>
        <p className="h-10 py-4 text-center bg-grey-2 rounded-b-lg"></p>
      </div>
    </div>
  );
};

export default CardSkeleton;
