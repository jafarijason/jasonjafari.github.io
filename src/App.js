import React, { Component } from 'react';
import data from "./data.json"
import logo from './logo.svg';
import './App.css';
import { SocialIcon } from 'react-social-icons';


function App() {
  return (
    <div className="App">
      <div className="navigation">Navigation</div>
      <div className="fullpage first">
        <h1 className="title">
          {data.title}
        </h1>
      </div>
      <div>
        <h4>{data.subtitle}</h4>
      </div>
      <div>
        {
          Object.keys(data.links).map(key => {
            return (
              <SocialIcon url={data.links[key]} />

            )
          })
        }
      </div>
      <div className="fullpage second">
        <h3>
          {data.sections[0].title}
        </h3>
        <p>{
          Object.keys(data.sections[0].items).map(key => {
            return (
              <p>
                {data.sections[0].items[key].content}
              </p>
            )
          })
        }</p>
      </div>

    </div>
  );
}

export default App;
