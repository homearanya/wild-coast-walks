import React from "react";
import Img from "gatsby-image";

const Destination = props => {
  return (
    <div className="col-md-6">
      <div className="single-destinations">
        <div className="destinations-image">
          {props.destination.image.image.childImageSharp ? (
            <Img
              fluid={props.destination.image.image.childImageSharp.fluid}
              alt={props.destination.image.alt}
            />
          ) : (
            <img
              src={props.destination.image.image}
              alt={props.destination.image.alt}
            />
          )}
        </div>
        <div className="destinations-text">
          <h4>
            {props.destination.heading1}{" "}
            <span>{props.destination.heading2}</span>
          </h4>
          {props.destination.content.paragraph.map((paragraph, index) => (
            <p key={index}>{paragraph.text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
