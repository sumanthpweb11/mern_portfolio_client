import React from "react";

const Cards = ({ cardData }) => {
  return (
    <div className=" mt-10 grid grid-cols-1 lg:grid-cols-4 justify-items-center gap-2 rounded-md ">
      {cardData.map((card, idx) => {
        return (
          <div
            key={card.id}
            className="w-[90%] h-[90%] lg:w-[150px] lg:h-[150px]  border flex flex-col items-center gap-2"
          >
            <span>{card.title}</span>
            <span>
              <img src={card.image} alt="" />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

// mt-10 flex items-center justify-center gap-2 flex-col lg:flex-row lg:justify-evenly lg:items-center lg:flex-wrap
