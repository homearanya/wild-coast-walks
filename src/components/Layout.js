import React from 'react'
import ScrollToTop from 'react-scroll-up'
import { StaticQuery, graphql, Link } from "gatsby"

import '../assets/css/open-sans.css'
import '../assets/css/raleway.css'
import '../assets/css/bootstrap.css'
import '../assets/css/font-awesome.min.css'

import '../assets/css/globalStyles.css'
import '../assets/css/layout.css'
import '../assets/css/responsive.css'

import Menu from "../components/Menu";
import FooterWidgetArea from "../components/FooterWidgetArea";


const Header = (props) => {
    return (
        <header>
            {/* <HeaderTop /> */}
            <Menu />
        </header>
    )
}

const Footer = (props) => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return (
        <div className="footer-area">
            <div className="container">
                <div className="row">
                    <div
                        className={"col-sm-12 footer"}
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <span>{`Copyright © ${currentYear} - `}<Link to="/">{props.siteTitle}</Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Layout({ children }) {
    return (
        <StaticQuery
            query={graphql`
                query LayoutQuery {
                    SiteMetaDataQuery: site {
                        siteMetadata {
                            title
                        }
                    }
                }
            `}
            render={data => {
                const siteTitle = data.SiteMetaDataQuery.siteMetadata.title
                return (
                    <div>
                        <Header />
                        {children}
                        <FooterWidgetArea />
                        <Footer siteTitle={siteTitle} />
                        <ScrollToTop showUnder={160}>
                            <i id="scrollUp" className="fa fa-angle-up"></i>
                        </ScrollToTop>
                    </div>
                )
            }}
        />
    )
}