import React, { useEffect, useState } from "react";

interface IParams {
    images: string[];
}

const SlideShow = ({images}: IParams) => {

    const [imageIndex, setImageIndex] = useState(4);

    useEffect(() => {
        setTimeout(() => {
            const newIndex = (imageIndex + 1) % (images.length - 1);
            setImageIndex(newIndex);
        }, 5000);
    });

    return (
        <img src={images[imageIndex]}/>
    );
};

export default SlideShow;
