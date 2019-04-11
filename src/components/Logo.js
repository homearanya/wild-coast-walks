import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const Logo = props => {
  return (
    <div className="col-md-4 col-sm-12">
      <div className="logo">
        <div className="logo-white">
          <Link to="/">
            <Img
              fluid={props.logos.whitelogo.image.childImageSharp.fluid}
              alt={props.logos.whitelogo.alt}
            />
          </Link>
        </div>
        <div className="logo-color">
          <Link to="/">
            <Img
              fluid={props.logos.colorlogo.image.childImageSharp.fluid}
              alt={props.logos.colorlogo.alt}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logo;
