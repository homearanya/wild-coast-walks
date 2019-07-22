import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const SubMenuDest = props => {
  return (
    <div>
      <span className="border-hover">
        <div className="mega-image">
          {props.section.image.image ? (
            props.section.image.image.childImageSharp ? (
              <Img
                fluid={props.section.image.image.childImageSharp.fluid}
                alt={props.section.image.alt}
              />
            ) : (
              <img
                src={props.section.image.image}
                alt={props.section.image.alt}
              />
            )
          ) : null}
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
