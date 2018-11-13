import React, { Component } from 'react'
import Sticky from 'react-sticky-el';
import { Link } from "gatsby"
import { CSSTransitionGroup } from 'react-transition-group'
import '../assets/css/menuDesktop.css'

import wild_coast from '../assets/img/menu/tm-450x300-12.jpg'
import midlands from '../assets/img/menu/tm-450x300-12.jpg'
import logo_white from '../assets/img/logo/logo.png'
import logo_dark from '../assets/img/logo/logo-dark.png'

const MenuBar = (props) => {
    return (
        <div className={props.menuClass}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="logo-menu-bg">
                            <div className="row">
                                <Logo />
                                <MainMenu />
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
                    <img className="logo-white" src={logo_white} alt="Wild Coast Walks logo"></img>
                    <img className="logo-dark" src={logo_dark} alt="Wild Coast Walks logo"></img>
                </Link>
            </div>
        </div>
    )
}

const SubMenuDest = (props) => {
    return (
        <div>
            <span className="border-hover">
                <Link to={props.target} className="mega-image" onClick={props.handleLeave}>
                    <img src={props.image} alt={props.imageAlt} />
                </Link>
            </span>
            <span>
                <Link
                    to={props.target}
                    className="mega-title"
                    onClick={props.handleLeave}>
                    {props.title}
                </Link>
                <Link to="/tour/" onClick={props.handleLeave}>{props.tour1}</Link>
                <Link to="/tour/" onClick={props.handleLeave}>{props.tour2}</Link>
                <Link to="/tour/" onClick={props.handleLeave}>{props.tour3}</Link>
            </span>
        </div>
    )
}

const SubMenu = (props) => {

    return (
        <div className="megamenu">
            <div className="megamenu-list clearfix">
                <SubMenuDest
                    target="/tours/"
                    image={wild_coast}
                    imageAlt="Wild Cast Slackpack"
                    title="Wild Coast Slackpack"
                    handleLeave={props.handleLeave}
                    tour1="Meander Hike (5 nights)"
                    tour2="Sunshine Hike (5 nights)"
                    tour3="Mini Break Hike (3 nights)"
                />
                <SubMenuDest
                    target="/tours/"
                    image={midlands}
                    imageAlt="Slackpacking in the Midlands "
                    title="Midlands Slackpack"
                    handleLeave={props.handleLeave}
                    tour1="Karkloof Falls2Falls (3 nights)"
                    tour2="Dargle Samango (3 nights)"
                    tour3="Nhlosane Hike (TBA)"
                />
            </div>
            <div className="megamenu-list clearfix">
                <SubMenuDest
                    target="/tours/"
                    image={wild_coast}
                    imageAlt="Drakensberg Slackpack"
                    title="Drakensberg Slackpack"
                    handleLeave={props.handleLeave}
                    tour1="Giants Cup (4 nights)"
                    tour2="Amphitheatre (4 nights)"
                    tour3="Mehloding (4 nights)"
                />
                <SubMenuDest
                    target="/tours/"
                    image={midlands}
                    imageAlt="Cycling in the Midlands"
                    title="Midlands Cycle Tours"
                    handleLeave={props.handleLeave}
                    tour1="Battlefields (7 nights)"
                    tour2="Midlands Meander (3 nights)"
                    tour3="Trappist Monastery (5 nights)"
                />
            </div>
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
                            <li><Link to="/" className="menu-item" activeClassName="menu-item-active" > HOME</Link></li>
                            <li><Link to="/about/" className="menu-item" activeClassName="menu-item-active">ABOUT US</Link></li>
                            <li onMouseLeave={this.handleLeave} onMouseEnter={this.handleHover}>
                                <a href="#"> Tours </a>
                                <CSSTransitionGroup
                                    transitionName="fade"
                                    transitionEnterTimeout={300}
                                    transitionLeaveTimeout={300}
                                >
                                    {this.state.showSubMenu && <SubMenu handleLeave={this.handleLeave} />}
                                </CSSTransitionGroup>
                            </li>
                            <li><Link to="/tour-calendar/" className="menu-item" activeClassName="menu-item-active">Tour Calendar</Link></li>
                            <li><Link to="/blog/" className="menu-item" activeClassName="menu-item-active">BLOG</Link></li>
                            <li><Link to="/contact/" className="menu-item" activeClassName="menu-item-active">Contact Us</Link></li>
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
                <MenuBar menuClass={menuClass} />
            </Sticky>
        )
    }
}
