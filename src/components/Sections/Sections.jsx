import React from 'react';
import styles from './Sections.module.css';
import TarjetasExperience from '../TarjetasExperience/TarjetasExperience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Projects from '../Projects/Projects';


const Sections = () => {
    const masProyectos = "https://github.com/FernandoOliverosOcampo?tab=repositories"

    return (
        <div className={styles.sectionsWrapper}>
            {/* Sección About */}
            <section id="about" className={styles.sectionContainer}>
                <div className={styles.contenidoAbout}>
                    <div className={styles.containerInfo}>
                        <div className={styles.textoContainer}>
                            <p>
                                ¡Hola! Soy Fernando Oliveros, un desarrollador web apasionado por crear experiencias digitales excepcionales.
                                Con experiencia en tecnologías modernas, me especializo en crear interfaces de usuario intuitivas y atractivas.
                            </p>
                        </div>
                        <div className={styles.containerBotones}>
                            <div className={styles.botonCv}>
                                <button>Descargar CV</button>
                            </div>
                            <div className={styles.botonWp}>
                                <button>Contactar por WhatsApp</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imagenSeccion}>
                        <div className={styles.imagenContainer}>
                            <img src="/img/imagen.webp" alt="Fernando Oliveros" />
                        </div>
                        <div className={styles.socialButtons}>
                            <a href="https://github.com/FernandoOliverosOcampo?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://www.linkedin.com/in/feroliverdev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección Experience */}
            <section id="experience" className={styles.sectionContainer}>
                <div className={styles.containerExperience}>
                    <div className={styles.cabeceraExperience}>
                        <h2>Experiencia Profesional</h2>
                    </div>
                    <div className={styles.descripcionExperience}>
                        <p>
                            A lo largo de mi carrera, he trabajado en diversos proyectos que me han permitido desarrollar
                            habilidades técnicas y blandas. Aquí te presento algunos de mis roles más destacados:
                        </p>
                    </div>
                    <div className={styles.contenidoExperience}>
                        <TarjetasExperience />
                    </div>
                </div>
            </section>

            {/* Sección Portfolio */}
            <section id="portfolio" className={styles.sectionContainer}>
                <div className={styles.containerPortfolio}>
                    <div className={styles.tituloProyectos} style={{textAlign: 'center'}}>
                        <h2>Proyectos Destacados</h2>
                    </div>
                    <Projects/>
                    <div className="ver-mas-proyectos" style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
                        <a target="_blank" href={masProyectos}>
                            <button>Ver más proyectos</button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sections; 