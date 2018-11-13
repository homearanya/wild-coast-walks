import React from 'react'
import Slider from "react-slick";

import MyContext from './Context'

import '../assets/css/animate.css'
import '../assets/lib/nivo-slider/css/nivo-slider.css'
import '../assets/lib/nivo-slider/css/preview.css'
import '../assets/css/slick-theme.css'
import '../assets/css/slick.css'
import '../assets/css/banner.css'
import '../assets/css/sliderArea.css'

import slider_1 from '../assets/img/slider/wild-coast-min.jpg'
import slider_2 from '../assets/img/slider/midlands-cycling-min.jpg'

const settings = {
  dots: false,
  infinite: true,
  fade: true,
  autoplay: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default function SliderArea() {
  return (
    <div className="slider-area">
      <div className="preview-2">
        <Slider {...settings}>
          <div>
            <MyContext.Consumer>
              {({ data, set }) => (
                <img src={slider_1} alt="" title="#slider-1-caption1"
                  onLoad={() => set({ loadSpinner: false })}
                />
              )}
            </MyContext.Consumer>
            <div className="nivo-caption" style={{ display: 'block' }}>
              <div className="banner-content slider-1">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="text-content">
                        <h1 className="title1"><span style={{ color: '#0967B9' }}> WILD COAST</span> <span style={{ color: '#98F339' }}>SLACKPACKING</span></h1>
                        <h2 className="sub-title">Take a Walk on the</h2>
                        <h2 className="sub-title"><span>wild side</span></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={slider_2} alt="" title="#slider-1-caption1" />
            <div className="nivo-caption" style={{ display: 'block' }}>
              <div className="banner-content slider-1">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="text-content">
                        <h1 className="title1"><span style={{ color: '#0967B9' }}>MIDLANDS</span> <span style={{ color: '#98F339' }}>WALKS & Cycling TOURS</span></h1>
                        <h2 className="sub-title">Meandering</h2>
                        <h2 className="sub-title">through the <span>Natal Midlands</span></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>

  )
}
