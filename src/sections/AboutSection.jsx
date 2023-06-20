import React, {  useContext } from "react";
import FullPage from "../components/FullPage";
import './AboutSection.css'
import { AppContext } from "../context/AppContext";
import _ from 'lodash';


const AboutSection = () => {

  const [state] = useContext(AppContext);

  return (
    <div name="Aboutscrool">
      <FullPage className="second">
        <h3>{_.get(state, `sections[0].title`)}</h3>
        <div >
          {_.get(state, `sections[0].items`, []).map(
            (item, index) => {
              return <p
                key={`about-${index}`}
              >
                {item?.content}
              </p>
            }
          )}
        </div>

      </FullPage>

    </div>
  );
};

export default AboutSection;
