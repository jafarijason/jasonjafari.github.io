import React, { Component, useContext } from "react";

import "./FirstBox.css";

import MenuButton from "../components/MenuButton";
import { AppContext } from '../context/AppContext';

const FirstBox = () => {
  const [state] = useContext(AppContext);

  return (
    <div className="FirstBox">

      <div className="rightPlace">
        {
          state?.keys?.map((item, index) => {
            return <MenuButton
              key={`first-box-${index}`}
              index={index}
            />;
          })
        }
      </div>

    </div>
  );
}
export default FirstBox;
