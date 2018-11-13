import React from 'react'

import servicesStyle from '../assets/css/serviceArea.css'
import servicesStyle from '../assets/css/serviceArea.module.css'

export default function ServiceArea() {
    return (
        <div className={"service-area " + servicesStyle.sectionPadding + " text-center"}>
            <div className="container">
                <div className="row">
                    <div className="service-icons">
                        <div className="col-md-2 col-sm-3">
                            <div className="single-service">
                                <div className="single-icon">
                                    <img src={icon_1} className="primary-img" alt="" />
                                    <img src={icon_1_hover} className="secondary-img" alt="" />
                                </div>
                                <h5>Cycling</h5>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-3">
                            <div className="single-service">
                                <div className="single-icon">
                                    <img src={icon_3} className="primary-img" alt="" />
                                    <img src={icon_3_hover} className="secondary-img" alt="" />
                                </div>
                                <h5>Slackpacking</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
