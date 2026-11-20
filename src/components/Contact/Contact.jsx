import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import styles from './Contact.module.css';
import Reveal from '../Reveal/Reveal';
import { cv, github, linKedin, whatsapp } from '../../../constants.js';

const Contact = () => (
    <section id="contacto" className="section">
        <div className="container">
            <Reveal>
                <div className={styles.cta}>
                    <span className={styles.glow} aria-hidden="true" />
                    <span className="section-eyebrow">Contacto</span>
                    <h2 className={styles.title}>¿Tienes un proyecto en mente?</h2>
                    <p className={styles.text}>
                        Estoy abierto a nuevas oportunidades y colaboraciones. Escríbeme y conversemos
                        sobre cómo puedo ayudarte.
                    </p>
                    <div className={styles.actions}>
                        <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                            <FontAwesomeIcon icon={faWhatsapp} /> Contactar por WhatsApp
                        </a>
                        <a href={linKedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                        </a>
                        <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            <FontAwesomeIcon icon={faGithub} /> GitHub
                        </a>
                        <a href={cv} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            <FontAwesomeIcon icon={faDownload} /> CV
                        </a>
                    </div>
                </div>
            </Reveal>
        </div>
    </section>
);

export default Contact;
