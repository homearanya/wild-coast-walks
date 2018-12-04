import React from 'react'
import Slider from "react-slick";
import Img from 'gatsby-image'

import MyContext from "../components/Context";

import '../assets/css/animate.css'
import '../assets/lib/nivo-slider/css/nivo-slider.css'
import '../assets/lib/nivo-slider/css/preview.css'
import '../assets/css/slick-theme.css'
import '../assets/css/slick.css'
import '../assets/css/sliderArea.css'

const Slide = (props) => {
  return (
    <div>
      <Img
        fluid={props.imageFluid}
        alt={props.imageAlt}
        title={props.imageTitle}
        onLoad={props.setSpinner ? () => props.setSpinner({ loadSpinner: false }) : null}
      />
      <div className="nivo-caption" style={{ display: 'block' }}>
        <div className="banner-content slider-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="text-content">
                  <h1 className="title1"><span style={{ color: '#0967B9' }}>{props.heading1}</span> <span style={{ color: '#98F339' }}>{props.heading2}</span></h1>
                  <h2 className="sub-title">{props.subheading1}</h2>
                  <h2 className="sub-title"><span>{props.subheading2}</span></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SliderArea(props) {
  let setSpinner;
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-area">
      <div className="preview-2">
        <Slider {...settings}>
          {props.slider.map((slide, index) => {
            if (index === 0) {
              setSpinner = props.setSpinner
            }
            return <Slide
              key={index}
              imageFluid={slide.image.image.childImageSharp.fluid}
              imageAlt={slide.image.alt}
              imageTitle={slide.heading1 + ' ' + slide.heading2}
              heading1={slide.heading1}
              heading2={slide.heading2}
              subheading1={slide.subheading1}
              subheading2={slide.subheading2}
              setSpinner={setSpinner}
            />
          })}
        </Slider>
      </div>
    </div>
  )
}