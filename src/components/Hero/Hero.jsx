import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';
import styles from './Hero.module.css';
import { cv, github, linKedin, whatsapp } from '../../../constants.js';

const floatingTech = [
    { nombre: 'React', icono: '/img/react.png', posicion: styles.chipTop },
    { nombre: 'Python', icono: '/img/python.png', posicion: styles.chipRight },
    { nombre: 'JavaScript', icono: '/img/javascript.png', posicion: styles.chipBottom }
];

const Hero = () => (
    <section id="inicio" className={styles.hero}>
        <div className={styles.backdrop} aria-hidden="true">
            <span className={`${styles.blob} ${styles.blobOne}`} />
            <span className={`${styles.blob} ${styles.blobTwo}`} />
            <span className={styles.grid} />
        </div>

        <div className={`container ${styles.heroContent}`}>
            <div className={styles.heroText}>
                <span className={styles.badge}>
                    <span className={styles.pulse} /> Disponible para nuevos proyectos
                </span>
                <h1 className={styles.title}>
                    Hola, soy <span className="gradient-text">Fernando Oliveros</span>
                </h1>
                <p className={styles.role}>Ingeniero de Sistemas · Desarrollador Web</p>
                <p className={styles.description}>
                    Un desarrollador web apasionado por crear experiencias digitales excepcionales.
                    Con experiencia en tecnologías modernas, me especializo en crear interfaces de
                    usuario intuitivas y atractivas.
                </p>

                <div className={styles.actions}>
                    <a href="#proyectos" className="btn btn-primary">
                        Ver proyectos <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                    <a href={cv} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        <FontAwesomeIcon icon={faDownload} /> Descargar CV
                    </a>
                </div>

                <div className={styles.socials}>
                    <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href={linKedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </div>
            </div>

            <div className={styles.heroVisual}>
                <div className={styles.photoRing}>
                    <img src="/img/imagen.webp" alt="Fernando Oliveros" className={styles.photo} />
                </div>
                {floatingTech.map((tech) => (
                    <div key={tech.nombre} className={`${styles.chip} ${tech.posicion}`}>
                        <img src={tech.icono} alt="" />
                        {tech.nombre}
                    </div>
                ))}
            </div>
        </div>

        <a href="#sobre-mi" className={styles.scrollHint} aria-label="Bajar a Sobre mí">
            <span />
        </a>
    </section>
);

export default Hero;
