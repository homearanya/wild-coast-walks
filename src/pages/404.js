import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import '../assets/css/404.css'

export default () => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Page Not Found - Wild Coast Walks</title>
        </Helmet>

        <div className="error-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="error-text-container">
                            <h1>Oops...</h1>
                            <h2>Page Not Found!</h2>
                            <p>Sorry the Page Could not be Found here.<br />
                                Try using the button below to go to main page/<br />
                                of the site</p>
                            <Link to="/">Go to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)