import React from 'react';
import logo from "../assets/logo-calcular.png";
import '../Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <img src={logo} alt="Logo Calcular" className="logo" />
                <div className="text-container">
                    <span className="tagline">Ferramenta de aprendizagem de cálculo</span>
                </div>
            </div>
            <div className="header-right">
                <span className="date">07/06/2025</span>
            </div>
        </header>
    );
};

export default Header;
