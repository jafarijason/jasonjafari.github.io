import React from 'react'
import SnowStorm from 'react-snowstorm';
import FirstBox from './sections/FirstBox';
import TitlesSectionNew from './sections/TitlesSectionNew';
import AboutSection from './sections/AboutSection';
import SkillSectionLanguagesNew from './sections/SkillSectionLanguagesNew';
import DataBaseKnowledge from "./sections/DataBaseKnowledge";
import EndBox from "./sections/EndBox";

import './App.css'

const AppNew = () => {
    return (
        <div name="mainContentSection">
            <input type="hidden" id="colorvalue" value="0" />
            <SnowStorm animationInterval="1" flakesMax="10" flakesMaxActive="10" vMaxY="15" />
            <FirstBox />
            <TitlesSectionNew />
            <AboutSection />
            <SkillSectionLanguagesNew />
            {/* <DataBaseKnowledge /> */}
            <EndBox />
        </div>
    );
}

export default AppNew;