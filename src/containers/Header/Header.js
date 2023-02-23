import React from 'react';
import NavList from "../../components/NavList/NavList";
import "./Header.scss"

const Header = () => {
    return (
        <div className="header">
        <div className="container">
            <NavList/>
        </div></div>

    );
};

export default Header;