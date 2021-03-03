import React from 'react'
import './logo.scss';

const Logo = ({ component, name }) => {
    return (
        <div className="logo-box">
            <div className="">
                {component}
            </div>
            <div className="name">
                {name}
            </div>
        </div>
    )
}

export default Logo
