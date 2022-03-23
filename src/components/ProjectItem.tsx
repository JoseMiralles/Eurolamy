import React from "react";
import { IFinishedProject } from "../data";
import SlideShow from "./SlideShow";

const ProjectItem = (params: IFinishedProject) => {

    return (
        <section className="project-item-section">
            
            <div className="left">
                <h1>{params.name}</h1>
                <p>{params.description}</p>
            </div>

            <div className="right">
                <SlideShow images={params.images}/>
            </div>
        
        </section>
    );
};

export default ProjectItem;
