import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';


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
                         <Link to="/">Inicio</Link>
                    </li>
                    <li>
                         <Link to="/camera">Cámaras</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Galería</Link>
                    </li>
                    <li>
                         <Link to="/courses">Cursos</Link>
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
