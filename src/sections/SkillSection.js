import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import SkillCard from '../components/SkillCard';
import DownIcon from "../components/DownIcon";
import {  Link  } from "react-scroll";
import "./SkillSection.css";

class AboutSection extends Component {
  render() {
    return (
      <div name="otherss">      <Fullpage className="third">
       
        <h3>{data.sections[1].title}</h3>
        <div className="cards-wrapper">
          {data.sections[1].items.map(eachSkill => {
            eachSkill.content['backgroundcolor1']  = data.sections[1].backgroundcolor1
            eachSkill.content['backgroundcolor2'] = data.sections[1].backgroundcolor2
            return (
              <SkillCard skill={eachSkill}/>
            );
          })}
        </div>
      </Fullpage>
      
      <Link
          activeClass="active"
          to="maincontentent"
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
