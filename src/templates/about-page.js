import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Banner from "../components/Banner";

import '../assets/css/aboutInformationArea.css'
import '../assets/css/aboutAdventures.css'
import '../assets/css/aboutServiceArea.css'
import '../assets/css/teamArea.css'
import '../assets/css/skillsArea.css'
import '../assets/css/advertiseArea.css'

import about_1 from '../assets/img/icon/about-1.png'
import about_1_hover from '../assets/img/icon/about-1-hover.png'
import about_2 from '../assets/img/icon/about-2.png'
import about_2_hover from '../assets/img/icon/about-2-hover.png'
import about_3 from '../assets/img/icon/about-3.png'
import about_3_hover from '../assets/img/icon/about-3-hover.png'
import serv_1 from '../assets/img/icon/serv-1.png'
import serv_2 from '../assets/img/icon/serv-2.png'
import serv_3 from '../assets/img/icon/serv-3.png'
import serv_4 from '../assets/img/icon/serv-4.png'
import serv_5 from '../assets/img/icon/serv-5.png'
import serv_6 from '../assets/img/icon/serv-6.png'
import serv_7 from '../assets/img/icon/serv-7.png'
import serv_8 from '../assets/img/icon/serv-8.png'
import serv_9 from '../assets/img/icon/serv-9.png'
import team_1 from '../assets/img/team/1.jpg'
import team_2 from '../assets/img/team/2.jpg'
import team_3 from '../assets/img/team/3.jpg'
import skill_1 from '../assets/img/icon/skill-1.png'
import skill_1_hover from '../assets/img/icon/skill-1-hover.png'
import skill_2 from '../assets/img/icon/skill-2.png'
import skill_2_hover from '../assets/img/icon/skill-2-hover.png'
import skill_3 from '../assets/img/icon/skill-3.png'
import skill_3_hover from '../assets/img/icon/skill-3-hover.png'

const AboutInformationArea = (props) => {
    return (
        <div className="about-information-area hidden-xs">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <div className="title-border">
                                <h1>Some <span>Great features</span></h1>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui<br /> id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="about-info text-center">
                            <div className="about-bg"></div>
                            <div className="about-image">
                                <div className="about-icon">
                                    <div className="icon-table-cell">
                                        <img alt="" src={about_1} className="primary-img" />
                                        <img alt="" src={about_1_hover} className="secondary-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="about-text-container">
                                <h4>Address</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi- scing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="about-info text-center">
                            <div className="about-bg"></div>
                            <div className="about-image">
                                <div className="about-icon">
                                    <div className="icon-table-cell">
                                        <img alt="" src={about_2} className="primary-img" />
                                        <img alt="" src={about_2_hover} className="secondary-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="about-text-container">
                                <h4>International Tour</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi- scing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 hidden-sm">
                        <div className="about-info text-center">
                            <div className="about-bg"></div>
                            <div className="about-image">
                                <div className="about-icon">
                                    <div className="icon-table-cell">
                                        <img alt="" src={about_3} className="primary-img" />
                                        <img alt="" src={about_3_hover} className="secondary-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="about-text-container">
                                <h4>Easy Travel</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi- scing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const AboutAdventures = (props) => {
    return (
        <div className="about-adventures section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="section-title text-center">
                            <div className="title-border">
                                <h1>About <span>adventures</span></h1>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.....</p>
                        </div>
                        <a href="#" className="button-one">Buy Now</a>
                        <div className="details-social-link">
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
    )
}

const AboutServiceArea = (props) => {
    return (
        <div className="about-service-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="single-about-service">
                            <div className="about-service-title">
                                <div className="about-service-icon">
                                    <img src={serv_1} alt="" />
                                </div>
                                <div className="table-title">
                                    <h4>Hiking Trails</h4>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                        <div className="single-about-service">
                            <div className="about-service-title">
                                <div className="about-service-icon">
                                    <img src={serv_2} alt="" />
                                </div>
                                <div className="table-title">
                                    <h4>Sailing and Boating</h4>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                        <div className="single-about-service no-margin">
                            <div className="about-service-title">
                                <div className="about-service-icon">
                                    <img src={serv_3} alt="" />
                                </div>
                                <div className="table-title">
                                    <h4>Night Cruises</h4>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="single-about-service">
                            <div className="about-service-title">
                                <div className="about-service-icon">
                                    <img src={serv_4} alt="" />
                                </div>
                                <div className="table-title">
                                    <h4>Family Trips</h4>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                        <div className="single-about-service">
                            <div className="about-service-title">
                                <div className="about-service-icon">
                                    <img src={serv_5} alt="" />
                                </div>
                                <div className="table-title">
                                    <h4>Polar</h4>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                        <div className="single-about-service no-margin">
                            <div className="about-service-title">
                                <div className="about-service-icon">
                                    <img src={serv_6} alt="" />
                                </div>
                                <div className="table-title">
                                    <h4>Beach Tour</h4>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                    </div>
                    <div className="col-md-4 hidden-sm">
                        <div className="single-about-service">
                            <div className="about-service-title">
                                <div className="about-service-icon">
                                    <img src={serv_7} alt="" />
                                </div>
                                <div className="table-title">
                                    <h4>Hiking Trips</h4>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                        <div className="single-about-service">
                            <div className="about-service-title">
                                <div className="about-service-icon">
                                    <img src={serv_8} alt="" />
                                </div>
                                <div className="table-title">
                                    <h4>Wildlife</h4>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                        <div className="single-about-service no-margin">
                            <div className="about-service-title">
                                <div className="about-service-icon">
                                    <img src={serv_9} alt="" />
                                </div>
                                <div className="table-title">
                                    <h4>Beach Party</h4>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros. Praesent porta lacinia elementum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TeamArea = (props) => {
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

const SkillsArea = (props) => {
    return (
        <div className="skills-area section-bottom-padding hidden-xs">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <div className="title-border">
                                <h1>Our <span>Skills</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="single-skill-item">
                            <div className="single-skill-icon">
                                <div className="skill-bg"></div>
                                <div className="skill-border-left"></div>
                                <img alt="" src={skill_1} className="primary-img" />
                                <img alt="" src={skill_1_hover} className="secondary-img" />
                                <div className="skill-border-right"></div>
                            </div>
                            <div className="single-skill-text">
                                <h4>Hiking Guide</h4>
                                <h3><span className="counter">90</span>%</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="single-skill-item low">
                            <div className="single-skill-icon">
                                <div className="skill-bg"></div>
                                <div className="skill-border-left"></div>
                                <img alt="" src={skill_2} className="primary-img" />
                                <img alt="" src={skill_2_hover} className="secondary-img" />
                                <div className="skill-border-right"></div>
                            </div>
                            <div className="single-skill-text">
                                <h4>Photography</h4>
                                <h3><span className="counter">63</span>%</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 hidden-sm">
                        <div className="single-skill-item medium">
                            <div className="single-skill-icon">
                                <div className="skill-bg"></div>
                                <div className="skill-border-left"></div>
                                <img alt="" src={skill_3} className="primary-img" />
                                <img alt="" src={skill_3_hover} className="secondary-img" />
                                <div className="skill-border-right"></div>
                            </div>
                            <div className="single-skill-text">
                                <h4>Camping Guide</h4>
                                <h3><span className="counter">78</span>%</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const AdvertiseArea = (props) => {
    return (
        <div className="advertise-area hidden-sm hidden-xs">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>If you need help don't hesitate to contact us see our <a href="#">Pricing Plan</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ({ data }) => {
    const { frontmatter } = data.markdownRemark
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About us - Wild Coast Walks</title>
            </Helmet>

            <Banner
                extraClass="about-banner"
                title1="About"
                title2="US"
                text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui"
                text2="id, convallis iaculis eros. Praesent porta lacinia elementum."
                breadcrumb="About us"
                imageBanner={frontmatter.imagebanner}
            />
            <AboutInformationArea />
            <AboutAdventures />
            <AboutServiceArea />
            <TeamArea />
            <SkillsArea />
            <AdvertiseArea />
        </div >
    )
}

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
        frontmatter {
            imagebanner {
                image
                alt
            }
        }   
     }
  }
`