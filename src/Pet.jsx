import React from "react";
import { Link } from "react-router-dom";

const Pet = ({ name, breed, location, images, id }) => {
  let hero = images[0];
  return (
    <Link to={`details/${id}`} className="pet">
      ,
      <div className="image-container">
        <img src={hero} alt={name}></img>
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {breed} | {location}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
