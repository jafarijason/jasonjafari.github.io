import React, { Component } from "react";
import "./Keyss.css";
import {  Link  } from "react-scroll";

class Keyss extends Component {
  render() {
    const { Keyss } = this.props;
    return (
     
      
        <div  className="keyysssss"  style={{float: "left",padding: "1em" , textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>
        <Link  id={Keyss.name}   activeClass="active"     to={Keyss.desteny}     spy={true}   smooth={true}   offset={0}    duration={800}    delay={30}    > {Keyss.name}  </Link>
           
        </div>
        
       
       
      
    );
  }
}

export default Keyss;
