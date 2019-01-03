import React, { Component } from "react";
import { Link } from "gatsby";
import Sticky from "react-sticky-el";

import { CSSTransition } from "react-transition-group";

class ToursMenuSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showToursMenuSection: false
    };

    this.toggleToursMenuSection = this.toggleToursMenuSection.bind(this);
  }

  toggleToursMenuSection() {
    this.setState(prevState => {
      return { showToursMenuSection: !prevState.showToursMenuSection };
    });
  }

  render() {
    return (
      <li>
        <button className="a-to-button" onClick={this.toggleToursMenuSection}>
          {this.props.tourMenuSections.heading1}{" "}
          <span>{this.props.tourMenuSections.heading2}</span>
        </button>
        <CSSTransition
          in={this.state.showToursMenuSection}
          classNames="fade-dropdown-menu"
          timeout={300}
          unmountOnExit
        >
          <React.Fragment>
            <ul style={{ display: "block" }}>
              {this.props.tourMenuSections.tours.map((tour, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={tour.slug}
                      onClick={this.props.toggleToursMenuSection}
                    >
                      {tour.tour + " (" + tour.duration + ")"}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <button
              className="a-to-button mean-expand mean-clicked"
              style={{ fontSize: "18px" }}
              onClick={this.toggleToursMenuSection}
            >
              -
            </button>
          </React.Fragment>
        </CSSTransition>
        <CSSTransition
          in={!this.state.showToursMenuSection}
          classNames="fade-dropdown-menu"
          timeout={300}
          unmountOnExit
        >
          <button
            className="a-to-button mean-expand"
            style={{ fontSize: "18px" }}
            onClick={this.toggleToursMenuSection}
          >
            +
          </button>
        </CSSTransition>
      </li>
    );
  }
}

const ToursMenu = props => {
  return (
    <div>
      <ul style={{ display: "block" }}>
        {props.tourMenuSections.map((section, index) => {
          return (
            <ToursMenuSection
              key={index}
              tourMenuSections={section}
              toggleMenu={props.toggleMenu}
            />
          );
        })}
      </ul>
    </div>
  );
};

const Menu = props => {
  return (
    <ul style={{ display: "block" }}>
      <li>
        <Link to="/" onClick={props.toggleMenu}>
          HOME
        </Link>
      </li>
      <li>
        <Link to="/about/" onClick={props.toggleMenu}>
          About us
        </Link>
      </li>
      <li>
        <button className="a-to-button" onClick={props.toggleToursMenu}>
          {" "}
          Tours{" "}
        </button>
        <CSSTransition
          in={props.showToursMenu}
          classNames="fade-dropdown-menu"
          timeout={300}
          unmountOnExit
        >
          <React.Fragment>
            <ToursMenu
              toggleMenu={props.toggleMenu}
              tourMenuSections={props.tourMenuSections}
            />
            <button
              className="a-to-button mean-expand mean-clicked"
              style={{ fontSize: "18px" }}
              onClick={props.toggleToursMenu}
            >
              -
            </button>
          </React.Fragment>
        </CSSTransition>
        <CSSTransition
          in={!props.showToursMenu}
          classNames="fade-dropdown-menu"
          timeout={300}
          unmountOnExit
        >
          <button
            className="a-to-button mean-expand"
            style={{ fontSize: "18px" }}
            onClick={props.toggleToursMenu}
          >
            +
          </button>
        </CSSTransition>
      </li>
      {props.switches.calendarswitch ? (
        <li>
          <Link to="/tour-calendar/" onClick={props.toggleMenu}>
            Tour Calendar
          </Link>
        </li>
      ) : null}
      {props.switches.blogswitch ? (
        <li>
          <Link to="/blog/" onClick={props.toggleMenu}>
            Blog
          </Link>
        </li>
      ) : null}
      <li className="mean-last">
        <Link to="/contact/" onClick={props.toggleMenu}>
          CONTACT
        </Link>
      </li>
    </ul>
  );
};

export default class MenuMobile extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      showToursMenu: false,
      sticky: false
    };

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleToursMenu = this.toggleToursMenu.bind(this);
    this.onFixedToggle = this.onFixedToggle.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target)
    ) {
      this.closeMenu();
    }
  }

  closeMenu() {
    this.setState({ showMenu: false });
  }

  toggleMenu() {
    this.setState(prevState => {
      return { showMenu: !prevState.showMenu };
    });
  }

  toggleToursMenu() {
    this.setState(prevState => {
      return { showToursMenu: !prevState.showToursMenu };
    });
  }

  onFixedToggle() {
    let isSticky = !this.state.sticky;
    this.setState({ sticky: isSticky });
  }

  render() {
    let menuClass;
    if (this.state.sticky) {
      menuClass = "mobile-menu-area sticky-menu";
    } else {
      menuClass = "mobile-menu-area";
    }
    return (
      <Sticky onFixedToggle={this.onFixedToggle}>
        <div className={menuClass} ref={this.wrapperRef}>
          <div className="container mean-container">
            <div className="mean-bar">
              <nav className="mean-nav">
                <CSSTransition
                  in={this.state.showMenu}
                  classNames="fade-dropdown-menu"
                  timeout={300}
                  unmountOnExit
                >
                  <React.Fragment>
                    <button
                      className="a-to-button meanmenu-reveal meanclose"
                      style={{
                        right: "0px",
                        left: "auto",
                        textAlign: "center",
                        textIndent: "0px",
                        fontSize: "18px"
                      }}
                      onClick={this.toggleMenu}
                    >
                      X
                    </button>

                    <Menu
                      toggleMenu={this.toggleMenu}
                      toggleToursMenu={this.toggleToursMenu}
                      tourMenuSections={this.props.sections}
                      showToursMenu={this.state.showToursMenu}
                      switches={this.props.switches}
                    />
                  </React.Fragment>
                </CSSTransition>
                <CSSTransition
                  in={!this.state.showMenu}
                  classNames="fade-dropdown-menu"
                  timeout={300}
                  unmountOnExit
                >
                  <button
                    className="a-to-button meanmenu-reveal"
                    style={{ right: "0", left: "auto" }}
                    onClick={this.toggleMenu}
                  >
                    <span />
                    <span />
                    <span />
                  </button>
                </CSSTransition>
              </nav>
            </div>
          </div>
        </div>
      </Sticky>
    );
  }
}
