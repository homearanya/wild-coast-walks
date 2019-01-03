import React, { Component } from "react";
import Sticky from "react-sticky-el";
import { Link } from "gatsby";
import Img from "gatsby-image";

import { CSSTransition } from "react-transition-group";

const MenuBar = props => {
  return (
    <div className={props.menuClass}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="logo-menu-bg">
              <div className="row">
                <Logo logos={props.logos} />
                <MainMenu
                  tourMenuSections={props.tourMenuSections}
                  switches={props.switches}
                  tourPage={props.tourPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Logo = props => {
  return (
    <div className="col-md-4 col-sm-12">
      <div className="logo">
        <div className="logo-white">
          <Link to="/">
            <Img
              fluid={props.logos.whitelogo.image.childImageSharp.fluid}
              alt={props.logos.whitelogo.alt}
            />
          </Link>
        </div>
        <div className="logo-color">
          <Link to="/">
            <Img
              fluid={props.logos.colorlogo.image.childImageSharp.fluid}
              alt={props.logos.colorlogo.alt}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

const SubMenuDest = props => {
  let imageFluid = "";
  let imageAlt = "";
  if (props.section.image) {
    imageFluid = props.section.image.image.childImageSharp.fluid;
    imageAlt = props.section.image.alt;
  }
  return (
    <div>
      <span className="border-hover">
        <a className="mega-image">
          <Img fluid={imageFluid} alt={imageAlt} />
        </a>
      </span>
      <span>
        <div className="mega-title">
          <h4>
            {props.section.heading1} <span>{props.section.heading2}</span>
          </h4>
        </div>
        {props.section.tours.map((tour, index) => (
          <Link
            key={index}
            to={tour.slug}
            className="mega-item"
            activeClassName="menu-item-active"
            onClick={props.handleLeave}
          >
            {tour.duration ? tour.tour + " (" + tour.duration + ")" : tour.tour}
          </Link>
        ))}
      </span>
    </div>
  );
};

const SubMenu = props => {
  return (
    <div className="megamenu">
      {props.tourMenuSections.map((section, index) => {
        if (index % 2 === 0) {
          return (
            <div key={index} className="megamenu-list clearfix">
              <SubMenuDest section={section} handleLeave={props.handleLeave} />
              {props.tourMenuSections[index + 1] ? (
                <SubMenuDest
                  section={props.tourMenuSections[index + 1]}
                  handleLeave={props.handleLeave}
                />
              ) : null}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

class MainMenu extends Component {
  constructor() {
    super();
    this.state = {
      showSubMenu: false
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleHover = () => {
    this.setState({ showSubMenu: true });
  };

  handleLeave = () => {
    this.setState({ showSubMenu: false });
  };

  render() {
    let toursClassName = "a-to-button";
    if (this.props.tourPage) {
      toursClassName = toursClassName + " menu-item-active";
    }
    return (
      <div className="col-md-8 hidden-sm hidden-xs">
        <div className="mainmenu">
          <nav>
            <ul id="nav">
              <li>
                <Link
                  to="/"
                  className="menu-item"
                  activeClassName="menu-item-active"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/about/"
                  className="menu-item"
                  activeClassName="menu-item-active"
                >
                  ABOUT US
                </Link>
              </li>
              <li
                onMouseLeave={this.handleLeave}
                onMouseEnter={this.handleHover}
              >
                <button className={toursClassName}> Tours </button>
                <CSSTransition
                  in={this.state.showSubMenu}
                  classNames="fade-dropdown-menu"
                  timeout={300}
                  unmountOnExit
                >
                  <SubMenu
                    tourMenuSections={this.props.tourMenuSections}
                    handleLeave={this.handleLeave}
                  />
                </CSSTransition>
              </li>
              {this.props.switches.calendarswitch ? (
                <li>
                  <Link
                    to="/tour-calendar/"
                    className="menu-item"
                    activeClassName="menu-item-active"
                  >
                    Tour Calendar
                  </Link>
                </li>
              ) : null}
              {this.props.switches.blogswitch ? (
                <li>
                  <Link
                    to="/blog/"
                    className="menu-item"
                    activeClassName="menu-item-active"
                  >
                    BLOG
                  </Link>
                </li>
              ) : null}
              <li>
                <Link
                  to="/contact/"
                  className="menu-item"
                  activeClassName="menu-item-active"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default class MenuDesktop extends Component {
  constructor() {
    super();
    this.state = { sticky: false };
    this.onFixedToggle = this.onFixedToggle.bind(this);
  }

  onFixedToggle() {
    let isSticky = !this.state.sticky;
    this.setState({ sticky: isSticky });
  }

  render() {
    let menuClass;
    if (this.state.sticky) {
      menuClass = "header-logo-menu sticky-menu";
    } else {
      menuClass = "header-logo-menu";
    }
    return (
      <Sticky onFixedToggle={this.onFixedToggle}>
        <MenuBar
          menuClass={menuClass}
          logos={this.props.logos}
          tourMenuSections={this.props.sections}
          switches={this.props.switches}
          tourPage={this.props.tourPage}
        />
      </Sticky>
    );
  }
}
