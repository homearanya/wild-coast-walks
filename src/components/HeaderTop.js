import React from 'react'

import '../assets/css/headerTop.css'

export default function HeaderTop() {
    return (
        <div className="header-top hidden-xs">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="contact-details">
                            <div className="email-address">
                                <i className="fa fa-envelope"></i>paul.hideaways@gmail.com
                            </div>
                            <div className="phone-number">
                                <i className="fa fa-phone-square"></i>082 323 4022
                            </div>
                        </div   >
                    </div>
                </div>
            </div>
        </div>
    )
}
