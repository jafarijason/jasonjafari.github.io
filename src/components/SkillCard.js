import React, { useContext } from "react";
import "./SkillCard.css";
import { AppContext } from "../context/AppContext";



const SkillCard = ({index}) => {

  const [state] = useContext(AppContext);

  const skillLanguages = state?.skillLanguages || {};
  const items = skillLanguages?.items || [];
  const skill = items[index];


  return (
    <div className="card" style={{
      backgroundImage: `linear-gradient(0deg ,
        ${skill?.content?.backgroundColor2}  ${skill?.content?.score}%
        , ${skill?.content?.backgroundColor1}  ${100 - skill?.content?.score}%)`
    }} >


      <div className="image-wrapper">
        <img src={skill?.content?.image} alt="" />
      </div>
      <div className="skill-title-wrapper">
        <h4>{skill?.content?.title}</h4>
      </div>



    </div>
  );
}

export default SkillCard;
