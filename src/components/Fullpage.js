import React, {Component} from 'react';
import './Fullpage.css'

class Fullpage extends Component {
    render() {
        const { children } = this.props
        return (
            <div id={` ${this.props.className || ''}`} className={`fullpage ${this.props.className || ''}`}>
                {children}
            </div>
        )
    }
}

export default Fullpage