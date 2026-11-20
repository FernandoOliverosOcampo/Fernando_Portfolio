import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import styles from './TarjetasExperience.module.css';
import Reveal from '../Reveal/Reveal';
import { experiencias } from '../../data/portfolio.js';

const TarjetasExperience = () => (
    <ol className={styles.timeline}>
        {experiencias.map((experiencia, index) => (
            <li key={experiencia.id} className={styles.timelineItem}>
                <span className={styles.dot} aria-hidden="true" />
                <Reveal delay={index * 120}>
                    <article className={styles.card}>
                        <header className={styles.cardHeader}>
                            <div className={styles.logo}>
                                <img src={experiencia.imagen} alt={experiencia.empresa} loading="lazy" />
                            </div>
                            <div>
                                <h3 className={styles.empresa}>{experiencia.empresa}</h3>
                                {experiencia.cargo && <p className={styles.cargo}>{experiencia.cargo}</p>}
                                <p className={styles.fecha}>
                                    <FontAwesomeIcon icon={faCalendarDays} /> {experiencia.fecha}
                                </p>
                            </div>
                        </header>

                        <ul className={styles.actividades}>
                            {experiencia.actividades.map((actividad) => (
                                <li key={actividad.titulo}>
                                    <h4>{actividad.titulo}</h4>
                                    <p>{actividad.descripcion}</p>
                                </li>
                            ))}
                        </ul>

                        {experiencia.herramientas.length > 0 && (
                            <div className={styles.herramientas}>
                                {experiencia.herramientas.map((herramienta) => (
                                    <span key={herramienta.nombre} className={styles.tag}>
                                        <img src={herramienta.icono} alt="" />
                                        {herramienta.nombre}
                                    </span>
                                ))}
                            </div>
                        )}
                    </article>
                </Reveal>
            </li>
        ))}
    </ol>
);

export default TarjetasExperience;
