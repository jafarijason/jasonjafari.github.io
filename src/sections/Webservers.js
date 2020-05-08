import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import skilllanguagessss from "./Webservers.json";
import data from "../data.json";
import SkillCard from '../components/SkillCard';
import DownIcon from "../components/DownIcon";
import {  Link  } from "react-scroll";
import "./Webservers.css";

class Webservers extends Component {
  render() {
    return (
      <div name="portfolioscrool">      <Fullpage className="Webservers">
       
        <h3  style={{color: "balck"}} className="Webservers" >{skilllanguagessss.title}</h3>
        <div className="cards-wrapper">
          {skilllanguagessss.items.map(eachSkill => {
            return (
              <SkillCard className="Webserverscard" skill={eachSkill}/>
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

export default Webservers;
