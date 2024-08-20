import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ filterItems }) => {
  return (
    <div className="grid  xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 grid-cols-1 justify-center shadow-sm">
      {filterItems.slice(0,8).map((item) => (
        <div key={item.id}>
          <Link to={`/shop/${item.id}`}>
            <img src={item.image}alt='' className="mx-auto w-full hover:scale-105 translate-all duration-300"/>
          </Link>
          <div className="mt-4 px-4">
            <h4 className="text-base font-semibold mb-2">{item.title}</h4>

            <div className="flex justify-between">
              <p className="text-black/50">{item.category}</p>
              <p className="text-black/50">{item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
