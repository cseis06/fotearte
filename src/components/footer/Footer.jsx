import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <div className='footer-content-logo'>
                <div className="footer-logo">
                    <img src="./img/logo-footer.svg" alt="logo" />
                </div>
                <p>
                    Más que una escuela de fotografía: Un espacio donde tu creatividad florece. Cursos dinámicos y una comunidad apasionada, ¡Haz clic y únete hoy mismo!
                </p>
            </div>
            <div className='footer-info'>
                <div className='footer-content-location'>
                    <h4>Ubicaciones</h4>
                    <ul>
                        <li>Asunción</li>
                        <li>Ciudad del Este</li>
                        <li>Villarrica</li>
                        <li>Encarnación</li>
                        <li>Coronel Oviedo</li>
                    </ul>
                </div>
                <div className='footer-content-menu'>
                    <h4>Menú</h4>
                    <ul>
                        <a href="#"><li>Inicio</li></a>
                        <a href="#"><li>Sobre Nosotros</li></a>
                        <a href="#"><li>Galería</li></a>
                        <a href="#"><li>Cursos</li></a>
                        <a href="#"><li>Contacto</li></a>
                    </ul>
                </div>
                <div className='footer-content-social'>
                    <h4>Nuestras Redes</h4>
                    <ul>
                        <a href="#">
                            <li>
                                <img src="./img/icon/instagram.svg" alt="instagram" />
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <img src="./img/icon/x.svg" alt="x" />
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <img src="./img/icon/facebook.svg" alt="facebook" />
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <img src="./img/icon/linkedin.svg" alt="linkedin" />
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
        <div className='copyright'>
            <span>
                FoteArte Paraguay &copy; 2025 - Todos los derechos reservados
            </span>
        </div>
    </footer>
  )
}

export default Footer