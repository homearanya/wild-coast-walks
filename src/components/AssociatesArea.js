import React from "react";

import Associate from "./Associate";

const AssociatesArea = props => {
  return (
    <div className="associate-area section-padding">
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
          <div className="associate-carousel">
            {props.partners.map((partner, index) => (
              <Associate key={index} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssociatesArea;
