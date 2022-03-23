import React, { useEffect, useState } from "react";

const FacebookSection = (): JSX.Element => {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <div id="facebook-section">
            <div className="content">

                <div className="left grow">
                    <div className="title">Facebook</div>
                    <div className="description">Vea nuestros ultimos projectos.</div>
                </div>

                <div className="right grow">
                    {loaded && <div
                        className="fb-page"
                        data-href="https://www.facebook.com/EUROLAMY/"
                        data-tabs="timeline"
                        data-width="500"
                        data-height=""
                        data-small-header="false"
                        data-adapt-container-width="true"
                        data-hide-cover="false"
                        data-show-facepile="true">
                        <blockquote
                            cite="https://www.facebook.com/EUROLAMY/"
                            className="fb-xfbml-parse-ignore">
                            <a href="https://www.facebook.com/EUROLAMY/">
                                Eurolamy Muebles de oficina
                            </a>
                        </blockquote>
                    </div>}
                </div>

            </div>
        </div>
    );
};

export default FacebookSection;
