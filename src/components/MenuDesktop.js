import React, { Component } from "react";
import Sticky from "react-sticky-el";

import MenuBar from "./MenuBar";

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
      <Sticky className="main-menu-desktop" onFixedToggle={this.onFixedToggle}>
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
