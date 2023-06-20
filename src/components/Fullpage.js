import React from 'react';
import './FullPage.css'

const FullPage = ({children, className}) => {
    return (
        <div id={` ${className || ''}`} className={`fullpage ${className || ''}`}>
            {children}
        </div>
    )
}

export default FullPage;
