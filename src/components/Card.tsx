import Image from "next/image";
import React, { FunctionComponent } from "react";

interface ICardProps {
  people: any;
}

const Card: FunctionComponent<ICardProps> = (props) => {
  const { people } = props;

  return (
    <div className="border border-neon px-5 py-5 rounded-lg shadow-sm hover:shadow-lg cursor-pointer hover:-translate-y-1 transition-all">
      <div>
        <Image
          key={people.name}
          src={`https://picsum.photos/id/${people.mass}/200/300`}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full max-h-[300px] rounded-t-lg object-cover"
          alt={people.name}
        />
      </div>
      <div>
        <p className="text-heading-3/h1 pt-3 text-center text-accentMedium">
          {people.name}
        </p>
      </div>
    </div>
  );
};

export default Card;
