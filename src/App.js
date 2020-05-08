import React, { Component } from "react";
import TitlesSection from "./sections/TitlesSection";
import AboutSection from "./sections/AboutSection";
import SkillSectionLanguages from "./sections/SkillSectionLanguages";
import DataBaseKoledge from "./sections/DataBaseKoledge";
import Frameworks from "./sections/Frameworks";
import SkillSection from "./sections/SkillSection";
import PythonLibrary from "./sections/PythonLibrary";
import PythonLibrary1 from "./sections/PythonLibrary1";
import Datascience from "./sections/Datascience";
import TeamWork from "./sections/TeamWork";
import Webservers from "./sections/Webservers";
import CloudComputing from "./sections/CloudComputing";
import EnginieeringToools from "./sections/EnginieeringToools";
import FirstBox from "./sections/FirstBox";
import EndBox from "./sections/EndBox";
import "./App.css";

import SnowStorm from 'react-snowstorm';

class App extends Component {
  render() {
    return (
      <div name="maincontentent">
        <input type="hidden" id="colorvalue" value="0" />
        <SnowStorm animationInterval="1" flakesMax="1000" flakesMaxActive="1000" vMaxY="15" />
        <FirstBox />
        <TitlesSection />
        <AboutSection />
        <SkillSectionLanguages />
        <DataBaseKoledge />
        <Frameworks />
        <PythonLibrary />
        <PythonLibrary1 />
        <Datascience />
        <TeamWork />
        <Webservers />
        <CloudComputing />
        <EnginieeringToools />

        <SkillSection />
        <EndBox />

      </div>
    );
  }
}

export default App;
