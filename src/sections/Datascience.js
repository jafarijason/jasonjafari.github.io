import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import skilllanguagessss from "./Datascience.json";
import data from "../data.json";
import SkillCard from '../components/SkillCard';
import DownIcon from "../components/DownIcon";
import {  Link  } from "react-scroll";
import "./Datascience.css";

class Datascience extends Component {
  render() {
    return (
      <div name="portfolioscrool">      <Fullpage className="thirdAIMLANDNN">
       
        <h3  style={{color: "balck"}} className="thirdAIMLANDNN" >{skilllanguagessss.title}</h3>
        <div className="cards-wrapper">
          {skilllanguagessss.items.map(eachSkill => {
            return (
              <SkillCard className="thirdAIMLANDNNcard" skill={eachSkill}/>
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

export default Datascience;
