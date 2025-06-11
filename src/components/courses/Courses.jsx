import React from 'react'
import CoursesHero from '../coursesHero/coursesHero'
import './courses.css'

const Courses = () => {
  return (
    <section className='courses'>
		<h2>
			Todos los Cursos Disponibles
		</h2>
		<div className='courses-container'>
			<div className='course'>
				<span>Nivel Inicial</span>
				<div className='course-image-wrapper'>
					<a href="https://wa.link/4wie6h" target='_blank'>
						<img src="./img/courses/inicial.png" alt="inicial" />
						<div className='overlay'>
							<span className='overlay-text'>Preguntar</span>
						</div>
					</a>
				</div>
			</div>
			<div className='course'>
				<span>Nivel Intermedio</span>
				<div className='course-image-wrapper'>
					<a href="https://wa.link/jsl598" target='_blank'>
						<img src="./img/courses/intermedio.png" alt="inicial" />
						<div className='overlay'>
							<span className='overlay-text'>Preguntar</span>
						</div>
					</a>
				</div>
			</div>
			<div className='course'>
				<span>Nivel Avanzado</span>
				<div className='course-image-wrapper'>
					<a href="https://wa.link/tcpcql" target='_blank'>
						<img src="./img/courses/avanzado.png" alt="inicial" />
						<div className='overlay'>
							<span className='overlay-text'>Preguntar</span>
						</div>
					</a>
				</div>
			</div>
		</div>
    </section>
  ) 
}

export default Courses