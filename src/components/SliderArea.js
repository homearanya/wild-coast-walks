import React, { Component } from 'react'
import Slider from "react-slick";

import MyContext from './Context'

import '../assets/css/animate.css'
import '../assets/lib/nivo-slider/css/nivo-slider.css'
import '../assets/lib/nivo-slider/css/preview.css'
import '../assets/css/slick-theme.css'
import '../assets/css/slick.css'
import '../assets/css/banner.css'
import '../assets/css/sliderArea.css'

const settings = {
  dots: false,
  infinite: true,
  fade: true,
  autoplay: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Slide = (props) => {
  return (
    <div>
      <img
        src={props.imageSrc}
        ref={props.reference}
        alt={props.imageAlt}
        title={props.imageTitle}
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

export default class SliderArea extends Component {
  constructor(props) {
    super(props);
    this.image = React.createRef();
    this.set = null;
  }

  componentDidMount() {
    const img = this.image.current;
    if (img && img.complete) {
      this.set({ loadSpinner: false });
    } else {
      img.addEventListener("onLoad", this.set({ loadSpinner: false }))
    }
  }

  render() {
    return (
      <div className="slider-area">
        <div className="preview-2">
          <Slider {...settings}>
            <MyContext.Consumer>
              {({ set }) => {
                this.set = set;
                return <Slide
                  imageSrc={this.props.slider.slide1.image.image}
                  imageAlt={this.props.slider.slide1.image.alt}
                  imageTitle={this.props.slider.slide1.heading1 + ' ' + this.props.slider.slide1.heading2}
                  reference={this.image}
                  heading1={this.props.slider.slide1.heading1}
                  heading2={this.props.slider.slide1.heading2}
                  subheading1={this.props.slider.slide1.subheading1}
                  subheading2={this.props.slider.slide1.subheading2}
                />
              }}
            </MyContext.Consumer>
            <Slide
              imageSrc={this.props.slider.slide2.image.image}
              imageAlt={this.props.slider.slide2.image.alt}
              imageTitle={this.props.slider.slide2.heading1 + ' ' + this.props.slider.slide2.heading2}
              reference={null}
              heading1={this.props.slider.slide2.heading1}
              heading2={this.props.slider.slide2.heading2}
              subheading1={this.props.slider.slide2.subheading1}
              subheading2={this.props.slider.slide2.subheading2}
            />
          </Slider>
        </div>
      </div>
    )
  }
}