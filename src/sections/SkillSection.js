import React, { Component } from "react";
import Fullpage from '../components/Fullpage'
import data from "../data.json"
import './SkillSection.css'


class SkillSection extends Component {
    render() {
      return (
        <Fullpage className="third">
          <h3>{data.sections[1].title}</h3>
           
        </Fullpage>
      );
    }
  }
  
  export default SkillSection;