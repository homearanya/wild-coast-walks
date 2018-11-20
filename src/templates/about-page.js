import React from "react"
import { Helmet } from "react-helmet"


import Banner from "../components/Banner";
import AboutInformationArea from "../components/AboutInformationArea";
import AboutAdventures from "../components/AboutAdventures";
import AboutServiceArea from "../components/AboutServiceArea";
import TeamArea from "../components/TeamArea";
import SkillsArea from "../components/SkillsArea";
import AdvertiseArea from "../components/AdvertiseArea";

export default () => (
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
        />
        <AboutInformationArea />
        <AboutAdventures />
        <AboutServiceArea />
        <TeamArea />
        <SkillsArea />
        <AdvertiseArea />

    </div >
)