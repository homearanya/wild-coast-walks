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
        const titleTemplate = `%s · ${siteTitle}`;
        return (
          <div>
            <Helmet
              key="app-head"
              titleTemplate={titleTemplate}
              defaultTitle={siteTitle}
            >
              <html lang="en" />

              <meta charSet="utf-8" />
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />
              {/* google search console */}
              <meta
                name="google-site-verification"
                content="5Fs1mwvNeUdz1y6CfK5miXOOFUra094G_nhpRiVyXXQ"
              />
            </Helmet>
            <Header tourPage={tourPage} />
            {children}
            <FooterWidgetArea />
            <Footer siteTitle={siteTitle} />
            <ScrollToTop showUnder={160} style={{ zIndex: 99 }}>
              <i id="scrollUp" className="fa fa-angle-up" />
            </ScrollToTop>
          </div>
        );
      }}
    />
  );
}
