import React, { useContext } from 'react'
import FullPage from "../components/FullPage";
import SkillCard from '../components/SkillCard';
import { Link } from "react-scroll";
import DownIcon from "../components/DownIcon";

import { AppContext } from '../context/AppContext';
import "./SkillSectionLanguages.css";

const SkillSectionLanguagesNew = () => {

    const [state] = useContext(AppContext);
    const { skillLanguages } = state;

    return (
        <div name="portfolioScrool">

            <FullPage className="thirdLanguages">

                <h3 className="thirdLanguages" >{skillLanguages?.title}</h3>
                <div className="cards-wrapper">
                    {(skillLanguages?.items || []).map(
                        (eachSkill, index) => {
                            eachSkill.content['backgroundColor1'] = skillLanguages?.backgroundColor1
                            eachSkill.content['backgroundColor2'] = skillLanguages?.backgroundColor2
                            return (
                                <SkillCard
                                    className="thirdLanguagesCard"
                                    index={index}
                                    key={`skill-${index}`}
                                />
                            );
                        }
                    )}
                </div>
            </FullPage>

            <Link
                activeClass="active"
                to="mainContentSection"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
                delay={30}
            >
                <DownIcon
                    icon={state?.icons?.UP}
                />
            </Link>

        </div>
    );
}

export default SkillSectionLanguagesNew;