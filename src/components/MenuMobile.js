import React, { Component } from 'react'
import { Link } from "gatsby"

import '../assets/css/menuMobile.css'

export default class MenuMobile extends Component {
    constructor() {
        super();

        this.state = {
            displayMenu: false,
            displayDestinations: false,
            displayDestination1: false,
            displayDestination2: false,
        };
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.openDestinations = this.openDestinations.bind(this);
        this.closeDestinations = this.closeDestinations.bind(this);
        this.openDestination1 = this.openDestination1.bind(this);
        this.closeDestination1 = this.closeDestination1.bind(this);
        this.openDestination2 = this.openDestination2.bind(this);
        this.closeDestination2 = this.closeDestination2.bind(this);
    }

    openMenu() {
        this.setState({ displayMenu: true });
    }

    closeMenu() {
        this.setState({
            displayMenu: false,
            displayDestinations: false,
            displayDestination1: false,
            displayDestination2: false,
        });
    }

    openDestinations() {
        this.setState({ displayDestinations: true });
    }

    closeDestinations() {
        this.setState({
            displayDestinations: false,
            displayDestination1: false,
            displayDestination2: false,
        });
    }
    openDestination1() {
        this.setState({ displayDestination1: true });
    }

    closeDestination1() {
        this.setState({
            displayDestination1: false,
        });
    }

    openDestination2() {
        this.setState({ displayDestination2: true });
    }

    closeDestination2() {
        this.setState({
            displayDestination2: false,
        });
    }

    render() {
        return (
            <div className="mobile-menu-area">
                <div className="container mean-container">
                    <div className="mean-bar">
                        {this.state.displayMenu ? (
                            <a href="#nav" className="meanmenu-reveal meanclose" style={{ right: '0px', left: 'auto', textAlign: 'center', textIndent: '0px', fontSize: '18px' }} onClick={this.closeMenu}>X</a>
                        ) :
                            (
                                <a href="#nav" className="meanmenu-reveal" style={{ right: "0", left: "auto" }} onClick={this.openMenu}>
                                    <span></span><span></span><span></span>
                                </a>
                            )
                        }
                        <nav className="mean-nav">
                            {this.state.displayMenu ? (
                                <ul style={{ display: 'block' }}>
                                    <li><Link to="/" onClick={this.closeMenu}>HOME</Link></li>
                                    <li><Link to="/about/" onClick={this.closeMenu}>About us</Link></li>
                                    <li>
                                        <a href="#" onClick={this.openDestinations}> Tours </a>
                                        {this.state.displayDestinations ? (
                                            <div>
                                                <ul style={{ display: 'block' }}>
                                                    <li><Link to="/tours/" onClick={this.closeMenu}>Wild Coast Slackpacking</Link>
                                                        {this.state.displayDestination1 ? (
                                                            <div>
                                                                <ul style={{ display: 'block' }}>
                                                                    <li><Link to="/tour/" onClick={this.closeMenu}>Tour 1</Link></li>
                                                                    <li><Link to="/tour/" onClick={this.closeMenu}>Tour 2</Link></li>
                                                                    <li><Link to="/tour/" onClick={this.closeMenu}>Tour 3</Link></li>
                                                                    <li><Link to="/tour/" onClick={this.closeMenu}>Tour 4</Link></li>
                                                                    <li><Link to="/tour/" onClick={this.closeMenu}>Tour 5</Link></li>
                                                                    <li><Link to="/tour/" onClick={this.closeMenu}>Tour 6</Link></li>
                                                                </ul>
                                                                <a className="mean-expand mean-clicked" href="#" style={{ fontSize: '18px' }} onClick={this.closeDestination1}>-</a>
                                                            </div>
                                                        ) :
                                                            (
                                                                <a className="mean-expand" href="#" style={{ fontSize: '18px' }} onClick={this.openDestination1}>+</a>
                                                            )
                                                        }
                                                    </li>
                                                    <li><Link to="/tours/" onClick={this.closeMenu}>Midlands Walks & Cycling</Link>
                                                        {this.state.displayDestination2 ? (
                                                            <div>
                                                                <ul style={{ display: 'block' }}>
                                                                    <li><Link to="/tour/" onClick={this.closeMenu}>Tour 1</Link></li>
                                                                    <li><Link to="/tour/" onClick={this.closeMenu}>Tour 2</Link></li>
                                                                    <li><Link to="/tour/" onClick={this.closeMenu}>Tour 3</Link></li>
                                                                    <li><Link to="/tour/" onClick={this.closeMenu}>Tour 4</Link></li>
                                                                    <li><Link to="/tour/" onClick={this.closeMenu}>Tour 5</Link></li>
                                                                    <li><Link to="/tour/" onClick={this.closeMenu}>Tour 6</Link></li>
                                                                </ul>
                                                                <a className="mean-expand mean-clicked" href="#" style={{ fontSize: '18px' }} onClick={this.closeDestination2}>-</a>
                                                            </div>
                                                        ) :
                                                            (
                                                                <a className="mean-expand" href="#" style={{ fontSize: '18px' }} onClick={this.openDestination2}>+</a>
                                                            )
                                                        }
                                                    </li>
                                                </ul>
                                                <a className="mean-expand mean-clicked" href="#" style={{ fontSize: '18px' }} onClick={this.closeDestinations}>-</a>
                                            </div>
                                        ) :
                                            (
                                                <a className="mean-expand" href="#" style={{ fontSize: '18px' }} onClick={this.openDestinations}>+</a>
                                            )
                                        }
                                    </li>
                                    <li><Link to="/tour-calendar/" onClick={this.closeMenu}>Tour Calendar</Link></li>
                                    <li><Link to="/blog/" onClick={this.closeMenu}>Blog</Link></li>
                                    <li className="mean-last"><Link to="/contact/" onClick={this.closeMenu}>CONTACT</Link></li>
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
