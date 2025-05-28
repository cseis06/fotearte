import React from 'react'
import './about.css'

const About = () => {
  return (
    <>
        <section className='about'>
            <div className='about-founder'>
                <div className='founder'>
                    <h2>Capturando Momentos, Compartiendo Pasión</h2>
                    <p>
                    FoteArte, tu puerta de entrada al fascinante mundo de la fotografía. 
                    Fundada en noviembre de 2010 por el renombrado fotógrafo paraguayo <b>Manuel Pellón</b>, FoteArte comenzó como un proyecto dedicado a producciones fotográficas artísticas, comerciales y sociales. Con el tiempo, evolucionamos y abrazamos la misión de hacer visible lo invisible, llevando la pasión por la fotografía a entusiastas de las artes visuales.
                    </p>
                </div>
                <div className="founder-img">
                    <img src="./img/portraits/1.jpg" alt="Manuel Pellón" />
                </div>
            </div>
        </section>

        <section>
            <div className='about-courses'>
                <h2>
                    Explorando la Fotografía a <br />
                    Todos los Niveles
                </h2>
                <p>
                Con el tiempo, evolucionamos y abrazamos la misión de hacer visible lo invisible, llevando la pasión por la fotografía a entusiastas de las artes visuales. En el corazón de FoteArte se encuentra nuestro compromiso con la educación fotográfica, expresado a través de cursos en tres niveles:
                </p>

                <div className='about-buttons'>
                    <button className='courses'>
                        <a href="#">Inicio</a>
                    </button>
                    <button className='courses'>
                        <a href="#">Intermedio</a>
                    </button>
                    <button className='courses'>
                        <a href="#">Avanzado</a>
                    </button>
                </div>

                <p>
                Creemos en la importancia de construir una comunidad donde la creatividad y la experimentación florezcan. Únete a nosotros en este viaje, donde la calidad educativa se combina con la pasión por capturar la belleza del mundo a través de nuestras lentes.
                </p>
            </div>
        </section>
    </>
  )
}

export default About