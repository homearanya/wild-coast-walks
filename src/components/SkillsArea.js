import React from 'react'

import '../assets/css/skillsArea.css'

import skill_1 from '../assets/img/icon/skill-1.png'
import skill_1_hover from '../assets/img/icon/skill-1-hover.png'
import skill_2 from '../assets/img/icon/skill-2.png'
import skill_2_hover from '../assets/img/icon/skill-2-hover.png'
import skill_3 from '../assets/img/icon/skill-3.png'
import skill_3_hover from '../assets/img/icon/skill-3-hover.png'

export default function SkillsArea() {
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
