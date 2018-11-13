import React from 'react'

import '../assets/css/aboutInformationArea.css'

import about_1 from '../assets/img/icon/about-1.png'
import about_1_hover from '../assets/img/icon/about-1-hover.png'
import about_2 from '../assets/img/icon/about-2.png'
import about_2_hover from '../assets/img/icon/about-2-hover.png'
import about_3 from '../assets/img/icon/about-3.png'
import about_3_hover from '../assets/img/icon/about-3-hover.png'

export default function AboutInformationArea() {
    return (
        <div className="about-information-area hidden-xs">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <div className="title-border">
                                <h1>Some <span>Great features</span></h1>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui<br /> id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="about-info text-center">
                            <div className="about-bg"></div>
                            <div className="about-image">
                                <div className="about-icon">
                                    <div className="icon-table-cell">
                                        <img alt="" src={about_1} className="primary-img" />
                                        <img alt="" src={about_1_hover} className="secondary-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="about-text-container">
                                <h4>Address</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi- scing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="about-info text-center">
                            <div className="about-bg"></div>
                            <div className="about-image">
                                <div className="about-icon">
                                    <div className="icon-table-cell">
                                        <img alt="" src={about_2} className="primary-img" />
                                        <img alt="" src={about_2_hover} className="secondary-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="about-text-container">
                                <h4>International Tour</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi- scing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 hidden-sm">
                        <div className="about-info text-center">
                            <div className="about-bg"></div>
                            <div className="about-image">
                                <div className="about-icon">
                                    <div className="icon-table-cell">
                                        <img alt="" src={about_3} className="primary-img" />
                                        <img alt="" src={about_3_hover} className="secondary-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="about-text-container">
                                <h4>Easy Travel</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi- scing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
