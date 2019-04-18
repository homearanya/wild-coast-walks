import React from "react";

import BookButton from "../components/BookButton";
import Content from "../components/Content";
import TourGallery from "../components/TourGallery";

const TourInformation = props => {
  const TourContent = props.contentComponent || Content;
  return (
    <div className="trip-information section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6 trip-information-left">
            <div className="row">
              <div className="trip-info-left-text">
                <div className="section-title text-center">
                  <div className="title-border">
                    <h1>
                      At a <span>Glance</span>
                    </h1>
                  </div>
                  <p>{props.tourInfo.frontmatter.shortdescription}</p>
                </div>
                <div className="clearfix" />
                <ul className="details-info">
                  <li className="">
                    <span>Destination</span>
                    {props.tourInfo.frontmatter.destination}
                  </li>
                  <li className="">
                    <span>Activity</span>
                    {props.tourInfo.frontmatter.activity}
                  </li>
                  <li className="">
                    <span>Duration</span>
                    {props.tourInfo.frontmatter.duration}
                  </li>
                  <li className="">
                    <span>Price</span>
                    {`From ${props.tourInfo.frontmatter.price} pp`}
                  </li>
                </ul>
              </div>
              <div className="row">
                <div className="trip-booking-info">
                  <BookButton
                    text="Book this trip"
                    tour={props.tourInfo.frontmatter.tour_id}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              {props.tourInfo.frontmatter.photoGallery &&
              props.tourInfo.frontmatter.photoGallery.photo &&
              props.tourInfo.frontmatter.photoGallery.photo.length > 0 ? (
                <TourGallery
                  photos={props.tourInfo.frontmatter.photoGallery.photo}
                />
              ) : null}
            </div>
          </div>
          <div className="col-md-6 trip-information-right">
            <div className="row">
              <div className="trip-info-left-text">
                <div className="section-title text-center">
                  <div className="title-border">
                    <h1>
                      Trip <span>Details</span>
                    </h1>
                  </div>
                  <TourContent content={props.tourInfo.html} />
                </div>
              </div>
              <div className="row">
                <div className="trip-booking-info">
                  <BookButton
                    text="Book this trip"
                    tour={props.tourInfo.frontmatter.tour_id}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourInformation;
