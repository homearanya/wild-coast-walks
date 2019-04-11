import React, { Component } from "react";
import { Link } from "gatsby";
import { CSSTransition } from "react-transition-group";

import SubMenuTours from "./SubMenuTours";

export default class MainMenu extends Component {
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
                <button type="button" className={toursClassName}>
                  Tours
                </button>
                <CSSTransition
                  in={this.state.showSubMenu}
                  classNames="fade-dropdown-menu"
                  timeout={300}
                  unmountOnExit
                >
                  <SubMenuTours
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
