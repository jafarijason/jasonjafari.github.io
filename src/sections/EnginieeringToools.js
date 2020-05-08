import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import skilllanguagessss from "./EnginieeringToools.json";
import data from "../data.json";
import SkillCard from '../components/SkillCard';
import DownIcon from "../components/DownIcon";
import {  Link  } from "react-scroll";
import "./EnginieeringToools.css";

class EnginieeringToools extends Component {
  render() {
    return (
      <div name="engtools">      <Fullpage className="EnginieeringToools">
       
        <h3  style={{color: "balck"}} className="EnginieeringToools" >{skilllanguagessss.title}</h3>
        <div className="cards-wrapper">
          {skilllanguagessss.items.map(eachSkill => {
            return (
              <SkillCard className="EnginieeringTooolscard" skill={eachSkill}/>
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

export default EnginieeringToools;
