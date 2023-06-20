import React, { Component } from "react";
import FullPage from "../components/FullPage";
import data from "../data.json";
import SkillCard from '../components/SkillCard';
import DownIcon from "../components/DownIcon";
import {  Link  } from "react-scroll";
import "./SkillSection.css";

class AboutSection extends Component {
  render() {
    return (
      <div name="otherss">      <FullPage className="third">
       
        <h3>{data.sections[1].title}</h3>
        <div className="cards-wrapper">
          {data.sections[1].items.map(eachSkill => {
            eachSkill.content['backgroundColor1']  = data.sections[1].backgroundColor1
            eachSkill.content['backgroundColor2'] = data.sections[1].backgroundColor2
            return (
              <SkillCard skill={eachSkill}/>
            );
          })}
        </div>
      </FullPage>
      
      <Link
          activeClass="active"
          to="mainContentSection"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
          delay={30} 
        >
          <DownIcon
            icon={data.icons.UP}
            onClick={() => console.log( )}
          />
        </Link>
       
      </div>
    );
  }
}

export default AboutSection;
