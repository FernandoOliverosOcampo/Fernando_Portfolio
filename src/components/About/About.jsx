import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faChartLine, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import styles from './About.module.css';
import Reveal from '../Reveal/Reveal';
import { servicios } from '../../data/portfolio.js';

const iconos = {
    code: faCode,
    server: faServer,
    chart: faChartLine,
    network: faNetworkWired
};

const About = () => (
    <section id="sobre-mi" className="section">
        <div className="container">
            <Reveal className="section-header">
                <span className="section-eyebrow">Sobre mí</span>
                <h2 className="section-title">Tecnología que resuelve problemas reales</h2>
                <p className="section-subtitle">
                    Soy Ingeniero de Sistemas con experiencia en desarrollo Frontend y Backend, análisis de datos
                    e infraestructura de redes. Esto es lo que puedo hacer por tu proyecto:
                </p>
            </Reveal>

            <div className={styles.grid}>
                {servicios.map((servicio, index) => (
                    <Reveal key={servicio.titulo} delay={index * 100}>
                        <article className={styles.card}>
                            <div className={styles.icon}>
                                <FontAwesomeIcon icon={iconos[servicio.icono]} />
                            </div>
                            <h3>{servicio.titulo}</h3>
                            <p>{servicio.descripcion}</p>
                        </article>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default About;
