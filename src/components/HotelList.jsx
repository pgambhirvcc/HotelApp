import React from "react";
import { HotelCard } from "./HotelCard";

export const HotelList = (props) => {
  return (
    <div className="hotel-container">
      {props.data.map((hotel, index) => {
        return <HotelCard key={index} data={hotel} />;
      })}
    </div>
  );
};
