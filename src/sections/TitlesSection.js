import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import titleSection from "./titleSection.json";
import { SocialIcon } from "react-social-icons";
import "./TitlesSection.css";
import { Link } from "react-scroll";
import DownIcon from "../components/DownIcon";

class TitlesSection extends Component {
  constructor() {
    super();
    this.state = {
      color: "white"
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    this.setState({ color: this.state.color === "white" ? "yellow" : "white" });
  }
  render() {
    return (
      <div>
            
        <Fullpage className="first">
        <div className="title TitleContent"> 
          <img alt="" className="mainimages" src={ titleSection.imglink}></img>
        </div>
          <h1
            className="title TitleContent"
            style={{ color: this.state.color }}
            onMouseOver={() => {
              this.changeColor();
            }}
            onMouseLeave={() => {
              this.changeColor();
            }}
          >
            {titleSection.title}
          </h1>

          <div className="TitleContent">
            <h2>{titleSection.subtitle}</h2>
          </div>
          <div className="icons-wrapper">
            {Object.keys(titleSection.links).map(key => {
              return (
                <div className="icon">
                  <SocialIcon    network={titleSection.links[key].network} url={titleSection.links[key].links}  bgColor="#7fb6ee" />
                </div>
              );
            })}
          </div>
          
        </Fullpage>
      
        <Link
            activeClass="active"
            to="end"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            delay={30}
          >
            <DownIcon
              icon={titleSection.icons.down}
              onClick={() => console.log("im working")}
            />
          </Link>
      </div>
    );
  }
}

export default TitlesSection;
