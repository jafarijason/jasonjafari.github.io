import React, { Component } from "react";
import "./SkillCard.css";


class SkillCard extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div className="card" style={{
        backgroundImage :`linear-gradient(0deg ,
          ${skill.content.backgroundcolor2}  ${skill.content.score}%
          , ${skill.content.backgroundcolor1}  ${100 - skill.content.score}%)` }} >


        <div className="image-wrapper">
          <img src={skill.content.image} alt="" />
        </div>
        <div className="skill-title-wrapper">
          <h4>{skill.content.title}</h4>
        </div>

        

      </div>
    );
  }
}

export default SkillCard;
