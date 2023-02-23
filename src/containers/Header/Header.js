import React from 'react';
import NavList from "../../components/NavList/NavList";
import "./Header.scss"

const Header = () => {
    return (
        <div className="header container">
            <NavList/>
        </div>
    );
};

export default Header;