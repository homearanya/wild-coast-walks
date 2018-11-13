import React from 'react'

import PartnerSlider from "../components/PartnerSlider"

import '../assets/css/partnerArea.css'


export default function PartnerArea() {
    return (
        <div className="partner-area section-bottom-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <div className="title-border">
                                <h1>Our <span>Partners</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <PartnerSlider />
            </div>
        </div>
    )
}
