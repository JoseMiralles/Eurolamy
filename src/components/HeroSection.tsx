import React from "react";

import {heroSection as data} from "../data";
import "./HeroSection.scss";
import logo from "../assets/logo.svg";

const HeroSection = () => {

    return (
        <section id="hero-section">

            <div id="hero-main-content">

                <div id="left-box">
                    <div className="content">
                        <img
                            id="hero-logo"
                            src={logo}
                            alt="EUROLAMY"
                        />

                        <p id="hero-text">{data.subText}</p>

                        <div id="hero-links">
                            <a
                                href="https://m.me/EUROLAMY"
                                className="btn">
                                FaceBook Messenger
                            </a>
                            <a
                                href="https://wa.me/+50250006820?text=Hola,%20quiziera%20saber%20mas%20informacion%20acerca%20de%20sus%20servicios."
                                className="btn">
                                Whatsapp
                            </a>
                        </div>
                    </div>
                </div>

                <div id="right-box">
                    <div className="content">
                    </div>
                </div>

            </div>

            {/* <div className="next-section-indicator-wrapper">
                <div className="next-section-indicator">
                    Deslice para ver projectos realizados
                </div>
            </div> */}

        </section>
    );
};

export default HeroSection;
