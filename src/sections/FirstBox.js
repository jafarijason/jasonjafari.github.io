import React, { Component } from "react";
import { Link } from "react-scroll";
import "./FirstBox.css";
import data from "../data.json";
import Keyss from "../components/Keyss";
import $ from "jquery";
let click = 0;
class FirstBox extends Component {
  changeColor() {
    let coloralpha = "0123456789ABCDEF";

    var colorchange = "#";
    for (var i = 0; i < 6; i++) {
      colorchange += coloralpha[Math.floor(Math.random() * 16)];
    }

    $("div").css("background-color", colorchange);
    colorchange = "#";

    for (var i = 0; i < 6; i++) {
      colorchange += coloralpha[Math.floor(Math.random() * 16)];
    }

    $("div, h1, section , .snow, btn").css("color", colorchange);
 
  }

  render() {
    return (
      <div className="FirstBox">
        <div className="rightplace">
          {data.keyyss.map(eachKeyss => {
            return <Keyss Keyss={eachKeyss} />;
          })}
        </div>
        <div
          style={{
            float: "left",
            padding: "20px",
            textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
            fontSize: " 1.5rem",
            fontWeight: "700"
          }}
          onClick={() => {
            this.changeColor();
          }}
        >
          Change Color
        </div>
      </div>
    );
  }
}

export default FirstBox;
