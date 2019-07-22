import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const TourThumbnail = props => {
  if (!props.tourDetails) {
    return null;
  }
  const tourSlug = props.tourDetails.fields.slug;
  const tourDetails = props.tourDetails.frontmatter;
  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="single-adventure">
        <Link to={tourSlug}>
          {tourDetails.imagethumbnail.image ? (
            tourDetails.imagethumbnail.image.childImageSharp ? (
              <Img
                fluid={tourDetails.imagethumbnail.image.childImageSharp.fluid}
                alt={tourDetails.imagethumbnail.alt}
              />
            ) : (
              <img
                src={tourDetails.imagethumbnail.image}
                alt={tourDetails.imagethumbnail.alt}
              />
            )
          ) : null}
        </Link>
        <div className="adventure-text effect-bottom">
          <Link to={tourSlug}>
            <div className="transparent-overlay">
              <h4>
                {tourDetails.tour_id} | <span>{tourDetails.destination}</span>
              </h4>
              <span className="trip-time">
                <i className="fa fa-clock-o" />
                {tourDetails.duration}
              </span>
              <p>
                {tourDetails.shortdescription.length > 233
                  ? tourDetails.shortdescription.substring(0, 230) + "..."
                  : tourDetails.shortdescription}
              </p>
            </div>
            <div className="adventure-price-link">
              <span className="trip-person">From</span>
              <span className="trip-person">
                <span>{tourDetails.price}</span>
              </span>
              <span className="trip-person">per person</span>
              <span className="trip-price">&nbsp;</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourThumbnail;
