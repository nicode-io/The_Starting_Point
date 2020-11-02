import React from 'react';
import './header.css';
import Mainlogo from '../mainlogo/mainlogo';
import Menu from '../menu/menu';

const Header = () => {
    return (
        <header className="hea-main">
            <Mainlogo />
            <Menu />
        </header>
    )
}

export default Header;