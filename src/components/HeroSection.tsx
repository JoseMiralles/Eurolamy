import React from "react";

import {heroSection as data} from "../data";
import "./HeroSection.scss";
import logo from "../assets/logo.svg";
import SlideShow from "./SlideShow";

const HeroSection = () => {

    const contactButtons = data.contactButtons.map(b => (
        <a href={b.url} className="btn">
            {b.text}
        </a>
    ));

    return (
        <section id="hero-section">

            <div className="background">
                <SlideShow images={data.slideShowImages}/>
            </div>

            <div className="content">

                <div className="left brand-gradient-background">
                    <img src={logo} id="top-logo"/>
                    <p className="description">{data.subText}</p>
                    <div className="contact-list">
                        {contactButtons}
                    </div>
                </div>

                <div className="right grow">
                </div>

            </div>

        </section>
    );
};

export default HeroSection;
