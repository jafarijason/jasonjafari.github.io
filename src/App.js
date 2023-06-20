import React, { Component } from "react";
import TitlesSectionNew from "./sections/TitlesSectionNew";
import AboutSection from "./sections/AboutSection";
import SkillSectionLanguages from "./sections/SkillSectionLanguagesNew";
import DataBaseKnowledge from "./sections/DataBaseKnowledge";
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
      <div name="mainContentSection">
        <input type="hidden" id="colorvalue" value="0" />
        <SnowStorm animationInterval="1" flakesMax="10" flakesMaxActive="10" vMaxY="15" />
        <FirstBox />
        <TitlesSectionNew />
        <AboutSection />
        {/*
        <DataBaseKnowledge />
        <Frameworks />
        <PythonLibrary />
        <PythonLibrary1 />
        <Datascience />
        <TeamWork />
        <Webservers />
        <CloudComputing />
        <EnginieeringToools />

        <SkillSection />
        <EndBox /> */}

      </div>
    );
  }
}

export default App;
