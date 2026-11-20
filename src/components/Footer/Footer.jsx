import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';
import { navItems } from '../../data/portfolio.js';
import { github, linKedin, whatsapp } from '../../../constants.js';

const Footer = () => (
    <footer className={styles.footer}>
        <div className={`container ${styles.footerContent}`}>
            <div className={styles.brand}>
                <span className={styles.logoMark}>FO</span>
                <div>
                    <p className={styles.name}>Fernando Oliveros</p>
                    <p className={styles.tagline}>Ingeniero de Sistemas · Desarrollador Web</p>
                </div>
            </div>

            <nav className={styles.links} aria-label="Enlaces del pie de página">
                {navItems.map((item) => (
                    <a key={item.id} href={`#${item.id}`}>{item.label}</a>
                ))}
            </nav>

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

        <div className={`container ${styles.bottom}`}>
            <p>© {new Date().getFullYear()} Fernando Oliveros. Todos los derechos reservados.</p>
            <a href="#inicio" className={styles.toTop}>
                Volver arriba <FontAwesomeIcon icon={faArrowUp} />
            </a>
        </div>
    </footer>
);

export default Footer;
