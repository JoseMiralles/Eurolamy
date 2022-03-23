import React from 'react';
import HeroSection from './components/HeroSection';
import ProjectItem from './components/ProjectItem';
import { finishedProjects } from './data';

function App() {

  const projectItems = finishedProjects.map((project) => {
    return (
      <ProjectItem
        name={project.name}
        description={project.description}
        images={project.images}
      />
    );
  });

  return (
    <div className="App">
      <HeroSection/>
      {/* {projectItems} */}
    </div>
  );
}

export default App;
