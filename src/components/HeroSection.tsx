import React from "react";

import {heroSection as data} from "../data";
import "./HeroSection.scss";
import logo from "../assets/logo.svg";

const HeroSection = () => {

    return (
        <section id="hero-section">

            <div id="hero-main-content">

                <div className="left">
                    <img
                        id="top-logo-image"
                        src={logo}
                        alt="EUROLAMY"
                    />
                    <br/>

                    <p>{data.subText}</p>
                    <br/>
                    <br/>

                    <div id="hero-links">
                        <a
                            href="https://m.me/EUROLAMY"
                            className="btn">
                            Messenger
                        </a>
                        <a
                            href="https://wa.me/+50250006820?text=Hola,%20quiziera%20saber%20mas%20informacion%20acerca%20de%20sus%20servicios."
                            className="btn">
                            Whatsapp
                        </a>
                    </div>
                </div>

                <div className="right">
                    <h1>RIGHT</h1>
                </div>

            </div>

            <div className="next-section-indicator-wrapper">
                <div className="next-section-indicator">
                    Deslice para ver projectos realizados
                </div>
            </div>

        </section>
    );
};

export default HeroSection;
