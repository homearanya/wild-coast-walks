import React from "react";
import TourThumbnail from "../components/TourThumbnail";

const ToursSection = props => {
  const tours = props.sectionDetails.tours;
  return (
    <div className="row">
      <div className="section-title text-center">
        <h2>
          {props.sectionDetails.heading1}{" "}
          <span>{props.sectionDetails.heading2}</span>
        </h2>
      </div>
      {tours.map((tour, index) => {
        return <TourThumbnail key={index} tourDetails={tour.tour} />;
      })}
    </div>
  );
};

export default ToursSection;
