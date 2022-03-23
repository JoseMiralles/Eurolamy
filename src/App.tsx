import React from 'react';
import FacebookSection from './components/FacebookSection';
import HeroSection from './components/HeroSection';
import ProjectItem from './components/ProjectItem';
import { finishedProjects } from './data';

function App() {

  return (
    <div className="App">
      <HeroSection/>
      {/* <FacebookSection/> */}
    </div>
  );
}

export default App;
