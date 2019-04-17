import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const AboutArea = props => {
  return (
    <div className="about-area section-padding text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 hidden-sm hidden-xs">
            {props.aboutArea.image.image.childImageSharp ? (
              <Img
                fluid={props.aboutArea.image.image.childImageSharp.fluid}
                alt={props.aboutArea.image.alt}
              />
            ) : (
              <img
                fluid={props.aboutArea.image.image}
                alt={props.aboutArea.image.alt}
              />
            )}
          </div>
          <div className="col-md-6">
            <div className="about-container">
              <div className="section-title">
                <div className="title-border">
                  <h1>
                    {props.aboutArea.heading1}{" "}
                    <span>{props.aboutArea.heading2}</span>
                  </h1>
                </div>
              </div>
              <div className="about-text">
                <p>{props.aboutArea.blurb}</p>
                <Link to="/about">More About Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea;
