import React from "react";

const Card = ({ ids, name, email }) => {
  return (
    <>
      <div className="bg-light-green dib br3 pa3 ma2 tc grow bw2 shadow-5">
        <div>
          <img
            src={`https://robohash.org/${ids}?size=190x190`}
            alt="my_image"
          ></img>
        </div>
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
