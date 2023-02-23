import React from 'react';
import logo from "../../../assets/images/logo.png"
const Logo = () => {
    return (
        <div style={{cursor: "pointer"}}>
            <i>
            <svg width="67" height="36" viewBox="0 0 67 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="67" height="36" fill="#5F5F5F"/>
            </svg>
            </i>
            <i>
                <img src={logo} alt="logo"/>
            </i>

        </div>
    );
};

export default Logo;