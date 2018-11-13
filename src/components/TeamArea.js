import React from 'react'

import '../assets/css/teamArea.css'

import team_1 from '../assets/img/team/1.jpg'
import team_2 from '../assets/img/team/2.jpg'
import team_3 from '../assets/img/team/3.jpg'

export default function TeamArea() {
    return (
        <div className="team-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <div className="title-border">
                                <h1>Our <span>Team</span></h1>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui<br /> id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="single-member">
                            <div className="team-image">
                                <a href="#"><img src={team_1} alt="" /></a>
                                <div className="member-text effect-bottom">
                                    <h4><a href="#">Maria B. | <span>Hiking Guide</span></a></h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text ever</p>
                                    <div className="member-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                        <a href="#"><i className="fa fa-rss"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="single-member">
                            <div className="team-image">
                                <a href="#"><img src={team_2} alt="" /></a>
                                <div className="member-text effect-bottom">
                                    <h4><a href="#">Janifer Craving | <span>Photographer</span></a></h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text ever</p>
                                    <div className="member-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                        <a href="#"><i className="fa fa-rss"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 hidden-sm">
                        <div className="single-member">
                            <div className="team-image">
                                <a href="#"><img src={team_3} alt="" /></a>
                                <div className="member-text effect-bottom">
                                    <h4><a href="#">Matt Jason | <span>Guide</span></a></h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever</p>
                                    <div className="member-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                        <a href="#"><i className="fa fa-rss"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
