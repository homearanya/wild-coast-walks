import React from 'react'

import '../assets/css/aboutServiceArea.css'

import serv_1 from '../assets/img/icon/serv-1.png'
import serv_2 from '../assets/img/icon/serv-2.png'
import serv_3 from '../assets/img/icon/serv-3.png'
import serv_4 from '../assets/img/icon/serv-4.png'
import serv_5 from '../assets/img/icon/serv-5.png'
import serv_6 from '../assets/img/icon/serv-6.png'
import serv_7 from '../assets/img/icon/serv-7.png'
import serv_8 from '../assets/img/icon/serv-8.png'
import serv_9 from '../assets/img/icon/serv-9.png'

export default function AboutServiceArea() {
    return (
        <div className="about-service-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="single-about-service">
                            <div className="about-service-title">
                                <div className="about-service-icon">
                                    <img src={serv_1} alt="" />
                                </div>
                                <div className="table-title">
                                    <h4>Hiking Trails</h4>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                        <div className="single-about-service">
                            <div className="about-service-title">
                                <div className="about-service-icon">
                                    <img src={serv_2} alt="" />
                                </div>
                                <div className="table-title">
                                    <h4>Sailing and Boating</h4>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                        <div className="single-about-service no-margin">
                            <div className="about-service-title">
                                <div className="about-service-icon">
                                    <img src={serv_3} alt="" />
                                </div>
                                <div className="table-title">
                                    <h4>Night Cruises</h4>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="single-about-service">
                            <div className="about-service-title">
                                <div className="about-service-icon">
                                    <img src={serv_4} alt="" />
                                </div>
                                <div className="table-title">
                                    <h4>Family Trips</h4>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                        <div className="single-about-service">
                            <div className="about-service-title">
                                <div className="about-service-icon">
                                    <img src={serv_5} alt="" />
                                </div>
                                <div className="table-title">
                                    <h4>Polar</h4>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                        <div className="single-about-service no-margin">
                            <div className="about-service-title">
                                <div className="about-service-icon">
                                    <img src={serv_6} alt="" />
                                </div>
                                <div className="table-title">
                                    <h4>Beach Tour</h4>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                    </div>
                    <div className="col-md-4 hidden-sm">
                        <div className="single-about-service">
                            <div className="about-service-title">
                                <div className="about-service-icon">
                                    <img src={serv_7} alt="" />
                                </div>
                                <div className="table-title">
                                    <h4>Hiking Trips</h4>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                        <div className="single-about-service">
                            <div className="about-service-title">
                                <div className="about-service-icon">
                                    <img src={serv_8} alt="" />
                                </div>
                                <div className="table-title">
                                    <h4>Wildlife</h4>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                        <div className="single-about-service no-margin">
                            <div className="about-service-title">
                                <div className="about-service-icon">
                                    <img src={serv_9} alt="" />
                                </div>
                                <div className="table-title">
                                    <h4>Beach Party</h4>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
