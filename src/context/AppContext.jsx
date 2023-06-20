import React, { useEffect } from 'react'
import { createContext } from 'react';
import { useImmer } from 'use-immer';


import titleSection from "../sections/titleSection.json";

import skillLanguages from "../sections/SkillSectionLanguages.json";


import data from "../data.json";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const [state, setState] = useImmer({});

    useEffect(() => {
        setState({
            ...data,
            titleSection,
            skillLanguages
        });
    }, [])

    return (
        <AppContext.Provider
            value={[state, setState]}
        >
            {
                props.children
            }

        </AppContext.Provider>
    );
}

export default AppContextProvider;