import React from 'react'

import '../assets/css/newsletterArea.css'

export default function NewsletterArea() {
    return (
        <div className="newsletter-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-4 col-sm-12">
                        <div className="section-title text-center">
                            <div className="title-border">
                                <h1 className="text-white">Subscribe for <span>Newsletter</span></h1>
                            </div>
                            <p className="text-white">Join our community of over 300,000 global readers who receive emails filled with news,<br /> promotions, and other good stuff from G Adventures.</p>
                        </div>
                        <form action="#" method="post" id="newsletter">
                            <div className="newsletter-content">
                                <div className="row">
                                    <div className="col-lg-9 col-md-8 col-sm-9 col-xs-12">
                                        <input type="text" name="email" placeholder="Enter your email address ......" />
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-3 col-xs-12">
                                        <button type="submit" className="button"><span>Subscribe</span></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
