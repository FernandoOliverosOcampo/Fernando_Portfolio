import styles from './Skills.module.css';
import Reveal from '../Reveal/Reveal';
import { habilidades } from '../../data/portfolio.js';

const Skills = () => (
    <section id="habilidades" className="section section-alt">
        <div className="container">
            <Reveal className="section-header">
                <span className="section-eyebrow">Habilidades</span>
                <h2 className="section-title">Mi stack tecnológico</h2>
                <p className="section-subtitle">
                    Herramientas y tecnologías con las que construyo soluciones de principio a fin.
                </p>
            </Reveal>

            <div className={styles.groups}>
                {habilidades.map((grupo, index) => (
                    <Reveal key={grupo.categoria} delay={index * 120} className={styles.group}>
                        <h3 className={styles.groupTitle}>{grupo.categoria}</h3>
                        <div className={styles.items}>
                            {grupo.items.map((item) => (
                                <div key={item.nombre} className={styles.item}>
                                    <img src={item.icono} alt="" loading="lazy" />
                                    <span>{item.nombre}</span>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;
