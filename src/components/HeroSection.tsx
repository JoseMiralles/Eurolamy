import React from "react";

import {heroSection as data} from "../data";
import "./HeroSection.scss";
import logo from "../assets/logo.svg";
import SlideShow from "./SlideShow";
import Top3DScene from "./Top3DScene";

const HeroSection = () => {

    const contactButtons = data.contactButtons.map((b, i) => (
        <a key={i} href={b.url} className="btn">
            {b.text}
        </a>
    ));

    return (
        <section id="hero-section" className="brand-gradient-background">

            <div className="background">
                <Top3DScene/>
            </div>

            <div className="content">

                <div className="left blur-background">
                    <img src={logo} id="top-logo"/>
                    <p className="description">{data.subText}</p>
                    <p id="contact-text">Contactenos:</p>
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
