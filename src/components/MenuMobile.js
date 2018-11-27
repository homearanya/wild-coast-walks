import React, { Component } from 'react'
import { Link } from "gatsby"

import '../assets/css/menuMobile.css'

class ToursMenuSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showTours: false,
        };

        this.toggleTours = this.toggleTours.bind(this);
    }

    toggleTours() {
        this.setState(prevState => { return { showTours: !prevState.showTours } });
    }

    render() {
        return (
            <li>
                <a onClick={this.toggleTours}>{this.props.tourMenuSections.heading1}</a>
                {this.state.showTours ? (
                    <div>
                        <ul style={{ display: 'block' }}>
                            {this.props.tourMenuSections.tours.map((tour, index) => {
                                return <li key={index}>
                                    <Link
                                        to={tour.slug}
                                        onClick={this.props.toggleMenu}>
                                        {tour.tour + " (" + tour.duration + ")"}
                                    </Link>
                                </li>
                            })}
                        </ul>
                        <a className="mean-expand mean-clicked" href="#" style={{ fontSize: '18px' }} onClick={this.toggleTours}>-</a>
                    </div>
                ) :
                    (
                        <a className="mean-expand" href="#" style={{ fontSize: '18px' }} onClick={this.toggleTours}>+</a>
                    )
                }
            </li>
        )
    }
}

const ToursMenu = (props) => {

    return (
        <div>
            <ul style={{ display: 'block' }}>
                {props.tourMenuSections.map((section, index) => {
                    return <ToursMenuSection
                        key={index}
                        tourMenuSections={section}
                        toggleMenu={props.toggleMenu}
                    />
                })}
            </ul>
            <a className="mean-expand mean-clicked" href="#" style={{ fontSize: '18px' }} onClick={props.toggleToursMenu}>-</a>
        </div>
    )

}


export default class MenuMobile extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
            showToursMenu: false,
        };

        this.closeMenu = this.closeMenu.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleToursMenu = this.toggleToursMenu.bind(this);
    }

    closeMenu() {
        this.setState({ showMenu: false });
    }

    toggleMenu() {
        this.setState(prevState => { return { showMenu: !prevState.showMenu } });
    }

    toggleToursMenu() {
        this.setState(prevState => { return { showToursMenu: !prevState.showToursMenu } });
    }

    render() {
        return (
            <div className="mobile-menu-area" onMouseLeave={this.closeMenu}>
                <div className="container mean-container">
                    <div className="mean-bar">
                        {this.state.showMenu ? (
                            <a
                                className="meanmenu-reveal meanclose"
                                style={{
                                    right: '0px',
                                    left: 'auto',
                                    textAlign: 'center',
                                    textIndent: '0px',
                                    fontSize: '18px'
                                }}
                                onClick={this.toggleMenu}>X</a>
                        ) :
                            (
                                <a className="meanmenu-reveal" style={{ right: "0", left: "auto" }} onClick={this.toggleMenu}>
                                    <span></span><span></span><span></span>
                                </a>
                            )
                        }
                        <nav className="mean-nav">
                            {this.state.showMenu ? (
                                <ul style={{ display: 'block' }}>
                                    <li><Link to="/" onClick={this.toggleMenu}>HOME</Link></li>
                                    <li><Link to="/about/" onClick={this.toggleMenu}>About us</Link></li>
                                    <li>
                                        <a onClick={this.toggleToursMenu}> Tours </a>
                                        {this.state.showToursMenu ? (
                                            <ToursMenu
                                                toggleMenu={this.toggleMenu}
                                                toggleToursMenu={this.toggleToursMenu}
                                                tourMenuSections={this.props.sections}
                                            />
                                        ) :
                                            (
                                                <a className="mean-expand" href="#" style={{ fontSize: '18px' }} onClick={this.toggleToursMenu}>+</a>
                                            )
                                        }
                                    </li>
                                    <li><Link to="/tour-calendar/" onClick={this.toggleMenu}>Tour Calendar</Link></li>
                                    <li><Link to="/blog/" onClick={this.toggleMenu}>Blog</Link></li>
                                    <li className="mean-last"><Link to="/contact/" onClick={this.toggleMenu}>CONTACT</Link></li>
                                </ul>
                            ) :
                                (
                                    null
                                )
                            }

                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}
