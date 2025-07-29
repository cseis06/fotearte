import React from 'react'
import './about.css'
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <>
        <section className='about' id='about'>
            <div className='about-founder'>
                <div className='founder'>
                    <h2>Capturando Momentos, Compartiendo Pasión</h2>
                    <p>
                    FoteArte, tu puerta de entrada al fascinante mundo de la fotografía. 
                    Fundada en noviembre de 2010 por el renombrado fotógrafo paraguayo <a href="https://www.instagram.com/manuelpellonph/" target='_blank'>Manuel Pellón</a>, FoteArte comenzó como un proyecto dedicado a producciones fotográficas artísticas, comerciales y sociales. Con el tiempo, evolucionamos y abrazamos la misión de hacer visible lo invisible, llevando la pasión por la fotografía a entusiastas de las artes visuales.
                    </p>
                </div>
                <div className="founder-img">
                    <a href="https://www.instagram.com/manuelpellonph/" target='_blank'>
                        <img src="./img/portraits/founder.jpg" alt="Manuel Pellón" />
                    </a>
                </div>
            </div>
        </section>

        <section className='about-courses' id='couses'>
            <div className='courses'>
                <h3>Explorando la Fotografía a <br />Todos los Niveles</h3>
                <p>
                Con el tiempo, evolucionamos y abrazamos la misión de hacer visible lo invisible, llevando la pasión por la fotografía a entusiastas de las artes visuales. En el corazón de FoteArte se encuentra nuestro compromiso con la educación fotográfica, expresado a través de cursos en tres niveles:
                </p>

                <div className='about-buttons'>
                    <a href="https://wa.link/0j1xkk" target='_blank'>
                        <button className='button-courses'>
                            Inicial
                        </button>
                    </a>
                    <a href="https://wa.link/vi0ifd" target='_blank'>
                        <button className='button-courses'>
                            Intermedio
                        </button>
                    </a>
                    <a href="https://wa.link/2x5ieq" target='_blank'>
                        <button className='button-courses'>
                            Avanzado
                        </button>
                    </a>
                </div>

                <p>
                Creemos en la importancia de construir una comunidad donde la creatividad y la experimentación florezcan. Únete a nosotros en este viaje, donde la calidad educativa se combina con la pasión por capturar la belleza del mundo a través de nuestras lentes.
                </p>
            </div>
        </section>

        <section className="join" id='join'>
            <div className="join-bg" />
            <div className="join-content">
                <div className='join-titles'>
                    <div className="join-title">
                        <p>Únete a FoteArte</p>
                    </div>
                    <Link to="/courses" className='join-button'>
                        <button>
                            VER CURSOS
                        </button>
                    </Link>
                </div>
            </div>
        </section>

        <section className='teachers' id='teachers'>
            <div className='teachers-content'>
                <h3>Instructores Apasionados, <br />Cursos Prácticos y Dinámicos</h3>
                <div className='teachers-images'>
                    <div className='teacher-image teacher-1'>
                        <img src="./img/portraits/gasparCasco.png" alt="Teacher 1" />
                        <div className='image-description'>
                            <div className='description'>
                                <span>Gaspar Agustín Casco</span>
                                <a href="#" target='_blank'>@profe1</a>
                            </div>
                        </div>
                    </div>

                    <div className='teacher-image teacher-2'>
                        <img src="./img/portraits/gasparCasco.png" alt="Teacher 2" />
                        <div className='image-description'>
                            <div className='description'>
                                <span>Profesor 2</span>
                                <a href="#" target='_blank'>@profe2</a>
                            </div>
                        </div>
                    </div>

                    <div className='teacher-image teacher-3'>
                        <img src="./img/portraits/raulQuintana.png" alt="Teacher 3" />
                        <div className='image-description'>
                            <div className='description'>
                                <span>Raúl Quintana</span>
                                <a href="#" target='_blank'>@profe3</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="gallery" id='gallery'>
            <div className="gallery-bg" />
            <div className="gallery-content">
                <div className='gallery-titles'>
                    <div className="gallery-title">
                        <p>¿Te intriga <br /> nuestro trabajo?</p>
                    </div>
                    <Link to="/gallery" className='gallery-button'>
                        <button>
                            VER GALERÍA
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default About