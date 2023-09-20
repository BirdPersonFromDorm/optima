import React from 'react';
import logo from '../../accets/img/header/logo.svg'

const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <a href="#" className="header__logo">
                    <img src={logo} alt="Logo: Optima Home"/>
                </a>
                <div className="header__menu menu">
                    <button type="button" className="menu__icon icon-menu"><span></span></button>
                    <nav className="menu__body">
                        <ul className="menu__List">
                            <li className="menu__item">
                                <a href="#home" className="menu__link">Home</a>
                            </li>
                            <li className="menu__item">
                                <a href="#features" className="menu__link">Features</a>
                            </li>
                            <li className="menu__item">
                                <a href="#testemonials" className="menu__link">Testemonials</a>
                            </li>
                            <li className="menu__item">
                                <a href="#contact" className="menu__link">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;