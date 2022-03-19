import React, { useEffect, useState } from "react";
import { heroSection as data } from "../data";

const HeroSlideShow = () => {

    const [imageIndex, setImageIndex] = useState(4);

    useEffect(() => {
        setTimeout(() => {
            const newIndex = (imageIndex + 1) % (data.slideShowImages.length - 1);
            setImageIndex(newIndex);
        }, 5000);
    });

    return (
        <img src={data.slideShowImages[imageIndex]}/>
    );
};

export default HeroSlideShow;
