import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const SubMenuDest = props => {
  console.log("SubMenuDest", props);
  let imageFluid = "";
  let imageAlt = "";
  if (props.section.image) {
    imageFluid = props.section.image.image.childImageSharp.fluid;
    imageAlt = props.section.image.alt;
  }
  return (
    <div>
      <span className="border-hover">
        <div className="mega-image">
          <Img fluid={imageFluid} alt={imageAlt} />
        </div>
      </span>
      <span>
        <div className="mega-title">
          <h4>
            {props.section.heading1} <span>{props.section.heading2}</span>
          </h4>
        </div>
        {props.section.tours.map((tour, index) => (
          <Link
            key={index}
            to={tour.tour.fields.slug}
            className="mega-item"
            activeClassName="menu-item-active"
            onClick={props.handleLeave}
          >
            {tour.tour.frontmatter.duration
              ? tour.tour.frontmatter.tour_id +
                " (" +
                tour.tour.frontmatter.duration +
                ")"
              : tour.tour.frontmatter.tour_id}
          </Link>
        ))}
      </span>
    </div>
  );
};

export default SubMenuDest;
