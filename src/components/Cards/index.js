import React from "react";
import "./Cards.css";

//pass the image into each card so all 12 are rendered
export function Cards(props) {
  return (
    <div className="card" onClick={props.imageClick}>
      <div className="img-container">
        <img
          alt={props.image.replace(".png", "")}
          src={props.image}
        />
      </div>
    </div>
  );
}
export default Cards;
