import React, { Component } from 'react'
import Sticky from 'react-sticky-el';
import { Link } from "gatsby"
// import { CSSTransitionGroup } from 'react-transition-group'

import '../assets/css/menuDesktop.css'

import logo_white from '../assets/img/logo/logo-trails-white.png'
import logo_color from '../assets/img/logo/logo-trails-color.png'

const MenuBar = (props) => {
    return (
        <div className={props.menuClass}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="logo-menu-bg">
                            <div className="row">
                                <Logo />
                                <MainMenu
                                    tourMenuSections={props.tourMenuSections}
                                    switches={props.switches} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Logo = () => {
    return (
        <div className="col-md-4 col-sm-12">
            <div className="logo">
                <Link to="/">
                    <img className="logo-white" src={logo_white} alt="Sa Adventure Trails logo"></img>
                    <img className="logo-color" src={logo_color} alt="Sa Adventure Trails logo"></img>
                </Link>
            </div>
        </div>
    )
}

const SubMenuDest = (props) => {
    let imageSrc = '';
    let imageAlt = '';
    if (props.section.image) {
        imageSrc = props.section.image.image;
        imageAlt = props.section.image.alt;
    }
    return (
        <div>
            <span className="border-hover">
                <a className="mega-image" >
                    <img src={imageSrc} alt={imageAlt} />
                </a>
            </span>
            <span>
                <div className="mega-title">
                    <h4>{props.section.heading1} <span>{props.section.heading2}</span></h4>
                </div>
                {props.section.tours.map((tour, index) =>
                    <Link
                        key={index}
                        to={tour.slug}
                        className="mega-item"
                        onClick={props.handleLeave}>
                        {tour.tour + " (" + tour.duration + ")"}
                    </Link>
                )}
            </span>
        </div>
    )
}

const SubMenu = (props) => {
    return (
        <div className="megamenu">
            {props.tourMenuSections.map((section, index) => {
                if (index % 2 === 0) {
                    return <div key={index} className="megamenu-list clearfix">
                        <SubMenuDest
                            section={section}
                            handleLeave={props.handleLeave}
                        />
                        {props.tourMenuSections[index + 1] ?
                            <SubMenuDest
                                section={props.tourMenuSections[index + 1]}
                                handleLeave={props.handleLeave}
                            />
                            : null}
                    </div>
                } else {
                    return null
                }
            })}
        </div>
    )
}

class MainMenu extends Component {
    constructor() {
        super()
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
        return (
            <div className="col-md-8 hidden-sm hidden-xs">
                <div className="mainmenu">
                    <nav>
                        <ul id="nav">
                            <li>
                                <Link
                                    to="/" className="menu-item"
                                    activeClassName="menu-item-active" >
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about/"
                                    className="menu-item"
                                    activeClassName="menu-item-active">
                                    ABOUT US
                                </Link>
                            </li>
                            <li onMouseLeave={this.handleLeave} onMouseEnter={this.handleHover}>
                                <a href="#"> Tours </a>
                                {/* <CSSTransitionGroup
                                    transitionName="fade"
                                    transitionEnterTimeout={300}
                                    transitionLeaveTimeout={300}
                                > */}
                                {this.state.showSubMenu && <SubMenu tourMenuSections={this.props.tourMenuSections} handleLeave={this.handleLeave} />}
                                {/* </CSSTransitionGroup> */}
                            </li>
                            {this.props.switches.calendarswitch ?
                                <li>
                                    <Link
                                        to="/tour-calendar/"
                                        className="menu-item"
                                        activeClassName="menu-item-active">
                                        Tour Calendar
                                </Link>
                                </li>
                                :
                                null
                            }
                            {this.props.switches.blogswitch ?
                                <li>
                                    <Link
                                        to="/blog/"
                                        className="menu-item"
                                        activeClassName="menu-item-active">
                                        BLOG
                                </Link>
                                </li>
                                :
                                null
                            }
                            <li>
                                <Link
                                    to="/contact/"
                                    className="menu-item"
                                    activeClassName="menu-item-active">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default class MenuDesktop extends Component {
    constructor() {
        super();
        this.state = { sticky: false }
        this.onFixedToggle = this.onFixedToggle.bind(this);
    }


    onFixedToggle() {
        let isSticky = !this.state.sticky;
        this.setState({ sticky: isSticky })
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
                    tourMenuSections={this.props.sections}
                    switches={this.props.switches}
                />
            </Sticky>
        )
    }
}
