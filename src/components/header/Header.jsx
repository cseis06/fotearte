import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
        <div className='header-content'>
            <div className='logo'>
                <img src="./img/logo.svg" alt="logo" />
            </div>
            <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
                <ul className='nav-links'>
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Cámaras</a>
                    </li>
                    <li>
                        <a href="#">Galería</a>
                    </li>
                    <li>
                        <a href="#">Cursos</a>
                    </li>
                    <li>
                        <button className='contact'>
                            <a href="#">Contacto</a>
                        </button>
                    </li>
                </ul>
            </nav>
            <button className='hamburger' onClick={toggleNav}>
                <img src="./img/icon/hamburguer.svg" alt="menu" />
            </button>
        </div>
    </header>
  );
};

export default Header;
