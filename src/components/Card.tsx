import Image from "next/image";
import React, { FunctionComponent } from "react";

const COLOR: any = {
  white: "#fff",
  gold: "#ffd700",
  fair: "#f2f2f2",
  light: "#eedd82",
  green: "#00cc00",
  "green-tan": "#D2B48C",
  pale: "#FAF9DE",
};

interface ICardProps {
  people: any;
  onClick: () => void;
}

const Card: FunctionComponent<ICardProps> = (props) => {
  const { people, onClick } = props;

  return (
    <div
      onClick={onClick}
      className="border border-neon px-5 py-5 rounded-lg shadow-sm hover:shadow-lg 
      cursor-pointer hover:-translate-y-1 transition-all"
      style={{ background: COLOR[people?.skin_color?.split(",")[0]] ?? "" }}
    >
      <div>
        <Image
          key={people.name}
          src={`https://picsum.photos/id/${
            isNaN(Number(people.mass)) ? 77 : Math.floor(people.mass)
          }/300`}
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
