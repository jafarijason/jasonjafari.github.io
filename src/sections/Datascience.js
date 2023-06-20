import React, { Component } from "react";
import FullPage from "../components/FullPage";
import skillLanguages from "./Datascience.json";
import data from "../data.json";
import SkillCard from '../components/SkillCard';
import DownIcon from "../components/DownIcon";
import {  Link  } from "react-scroll";
import "./Datascience.css";

class Datascience extends Component {
  render() {
    return (
      <div name="AIandMachine">      <FullPage className="thirdAIMLANDNN">
       
        <h3  style={{color: "balck"}} className="thirdAIMLANDNN" >{skillLanguages.title}</h3>
        <div className="cards-wrapper">
          {skillLanguages.items.map(eachSkill => {
            eachSkill.content['backgroundColor1']  = skillLanguages.backgroundColor1
            eachSkill.content['backgroundColor2'] = skillLanguages.backgroundColor2
            return (
              <SkillCard className="thirdAIMLANDNNcard" skill={eachSkill}/>
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

export default Datascience;
