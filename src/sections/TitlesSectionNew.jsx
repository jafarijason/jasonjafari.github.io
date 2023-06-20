import React, { useState } from 'react'
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { SocialIcon } from "react-social-icons";
import { Link } from "react-scroll";
import DownIcon from "../components/DownIcon";

import _ from 'lodash';

import "./TitlesSection.css";
import FullPage from '../components/FullPage';


const TitlesSectionNew = () => {

    const [color, setColor] = useState('white');

    const [state] = useContext(AppContext)

    const { titleSection } = state;

    const changeColor = () => {
        setColor(color === "white" ? "yellow" : "white")
    }

    return (

        <div>

            <FullPage className="first">
                <div className="title TitleContent">
                    <img alt="" className="mainimages" src={titleSection?.imglink}></img>
                </div>
                <h1
                    className="title TitleContent"
                    style={{ color: color }}
                    onMouseOver={() => {
                        changeColor();
                    }}
                    onMouseLeave={() => {
                        changeColor();
                    }}
                >
                    {titleSection?.title}
                </h1>

                <div className="TitleContent">
                    <h2>{titleSection?.subtitle}</h2>
                </div>
                <div className="icons-wrapper">
                    {Object.keys(titleSection?.links || {})?.map((item, index) => {
                        return (
                            <div
                                className="icon"
                                key={`icons-${index}`}
                            >
                                <SocialIcon
                                    network={_.get(titleSection, `links[${item}].network`)}
                                    url={_.get(titleSection, `links[${item}].links`)}
                                    bgColor="#7fb6ee"
                                />
                            </div>
                        );
                    })}
                </div>

            </FullPage>

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
                    icon={titleSection?.icons?.down}
                />
            </Link>
        </div>
    );
}

export default TitlesSectionNew;