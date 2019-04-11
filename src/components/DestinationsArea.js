import React from "react";

import Destination from "./Destination";

const DestinationsArea = props => {
  return (
    <div className="destinations-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title text-center">
              <div className="title-border">
                <h1>
                  {props.heading1} <span>{props.heading2}</span>
                </h1>
              </div>
              <p>{props.blurb}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="destinations-carousel">
            {props.destinations.map((destination, index) => (
              <Destination key={index} destination={destination} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsArea;
