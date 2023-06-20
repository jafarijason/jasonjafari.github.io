import React, { Component } from "react";
import FullPage from "../components/FullPage";
import skillLanguages from "./TeamWork.json";
import data from "../data.json";
import SkillCard from '../components/SkillCard';
import DownIcon from "../components/DownIcon";
import {  Link  } from "react-scroll";
import "./TeamWork.css";

class TeamWork extends Component {
  render() {
    return (
      <div name="teamWork">      <FullPage className="TeamWork">
       
        <h3  style={{color: "balck"}} className="TeamWork" >{skillLanguages.title}</h3>
        <div className="cards-wrapper">
          {skillLanguages.items.map(eachSkill => {
            eachSkill.content['backgroundColor1']  = skillLanguages.backgroundColor1
            eachSkill.content['backgroundColor2'] = skillLanguages.backgroundColor2
            return (
              <SkillCard className="TeamWorkcard" skill={eachSkill}/>
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

export default TeamWork;
