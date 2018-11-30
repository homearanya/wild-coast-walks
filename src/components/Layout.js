import React from 'react'
import ScrollToTop from 'react-scroll-up'

import '../assets/css/scrollUp.css'

import '../assets/css/open-sans.css'
import '../assets/css/raleway.css'
import '../assets/css/bootstrap.css'
import '../assets/css/font-awesome.min.css'

import '../assets/css/globalStyles.css'

import Header from "../components/Header"
import FooterWidgetArea from "../components/FooterWidgetArea";
import Footer from "../components/Footer";

import '../assets/css/layout.css'
import '../assets/css/responsive.css'

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <FooterWidgetArea />
            <Footer />
            <ScrollToTop showUnder={160}>
                <i id="scrollUp" className="fa fa-angle-up"></i>
            </ScrollToTop>
        </div>
    )
}