import React, { Component } from "react";
import TitlesSection from "./sections/TitlesSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import FirstBox from "./sections/FirstBox";
import EndBox from "./sections/EndBox";
import "./App.css";
 
import SnowStorm from 'react-snowstorm';
 
class App extends Component {
  render() {
    return (
      <div name="maincontentent">
      <input type="hidden" id="colorvalue" value="0" />
    <SnowStorm animationInterval="1"  flakesMax="1000" flakesMaxActive="1000"  vMaxY="8" />
        <FirstBox />
        <TitlesSection />
        <AboutSection />
        <SkillSection />
        <EndBox />
      
      </div>
    );
  }
}

export default App;
