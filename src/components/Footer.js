import React from 'react'
import { Link } from "gatsby"

import '../assets/css/footer.css'
import footerStyle from '../assets/css/footer.module.css'

export default function Footer() {
    return (

        <div className="footer-area">
            <div className="container">
                <div className="row">
                    <div className={"col-sm-12 footer " + footerStyle.footerContent}>
                        <span>Copyright © 2018 <Link to="/">Wild Coast Walks</Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
