import React from "react";

export const HotelCard = (props) => {
  return (
    <div className="hotel-card">
      <h3>{props.data.title}</h3>
      <img width={400} src={props.data.image} alt="" />
      <p>Price : {props.data.price}</p>

      <div>
        <b>Likes: {props.data.like}</b>
        <b>Rating: {props.data.rating}</b>
      </div>
    </div>
  );
};
