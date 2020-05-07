import React, { Component } from "react";
import Fullpage from '../components/Fullpage'
import data from "../data.json"
import { SocialIcon } from 'react-social-icons';

class TitlesAndIcons extends Component {
    render() {

        return (
            <Fullpage className="first">
                <h1 className="title">
                    {data.title}
                </h1>
                <h3>{data.subtitle}</h3>
                <div>
                    {
                        Object.keys(data.links).map(key => {
                            return (
                                <SocialIcon url={data.links[key]} />

                            )
                        })
                    }
                </div>
            </Fullpage>
        )
    }
}
export default TitlesAndIcons
