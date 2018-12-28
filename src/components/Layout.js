import React from "react";
import Helmet from "react-helmet";
import ScrollToTop from "react-scroll-up";
import { StaticQuery, graphql, Link } from "gatsby";

import "../assets/css/open-sans.css";
import "../assets/css/raleway.css";
import "../assets/css/bootstrap.css";
import "../assets/css/font-awesome.min.css";

import "../assets/css/globalStyles.css";
import "../assets/css/layout.css";
import "../assets/css/responsive.css";

import Menu from "../components/Menu";
import FooterWidgetArea from "../components/FooterWidgetArea";

const Header = props => {
  return (
    <header>
      {/* <HeaderTop /> */}
      <Menu tourPage={props.tourPage} />
    </header>
  );
};

const Footer = props => {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  return (
    <div className="footer-area">
      <div className="container">
        <div className="row">
          <div
            className={"col-sm-12 footer"}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <span>
              {`Copyright © ${currentYear} - `}
              <Link to="/">{props.siteTitle}</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Layout({ children, tourPage }) {
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
        const siteTitle = data.SiteMetaDataQuery.siteMetadata.title;
        return (
          <div>
            <Helmet
              key="app-head"
              titleTemplate="%s · SA Adventure Trails"
              defaultTitle="SA Adventure Trails"
            >
              <html lang="en" />

              <meta charSet="utf-8" />
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />

              {/* Favicon stuff from realfavicongenerator.net */}
              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
              />
              <link rel="manifest" href="/site.webmanifest" />
              <link
                rel="mask-icon"
                href="/safari-pinned-tab.svg"
                color="#5bbad5"
              />
              <meta name="msapplication-TileColor" content="#9dfffe" />
              <meta name="theme-color" content="#c800ec" />
            </Helmet>
            <Header tourPage={tourPage} />
            {children}
            <FooterWidgetArea />
            <Footer siteTitle={siteTitle} />
            <ScrollToTop showUnder={160}>
              <i id="scrollUp" className="fa fa-angle-up" />
            </ScrollToTop>
          </div>
        );
      }}
    />
  );
}
