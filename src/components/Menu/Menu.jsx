import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from './Menu.module.css'
import { navItems } from '../../data/portfolio.js'

const Menu = ({ onThemeChange, currentTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(navItems[0].id);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveItem(entry.target.id);
                });
            },
            { rootMargin: '-45% 0px -50% 0px' }
        );
        navItems.forEach(({ id }) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);
    const isLight = currentTheme === 'light';

    return (
        <header className={`${styles.menu} ${isScrolled || isMenuOpen ? styles.scrolled : ''}`}>
            <div className={`container ${styles.menuContainer}`}>
                <a href="#inicio" className={styles.menuLogo} onClick={closeMenu} aria-label="Ir al inicio">
                    <span className={styles.logoMark}>FO</span>
                    <span className={styles.logoText}>Fernando<span className="gradient-text">.dev</span></span>
                </a>

                <nav
                    className={`${styles.menuOptions} ${isMenuOpen ? styles.open : ''}`}
                    aria-label="Menú principal"
                >
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`${styles.menuItem} ${activeItem === item.id ? styles.active : ''}`}
                            aria-current={activeItem === item.id ? 'true' : undefined}
                            onClick={closeMenu}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className={styles.menuControls}>
                    <button
                        className={styles.iconButton}
                        onClick={onThemeChange}
                        aria-label={`Cambiar a tema ${isLight ? 'oscuro' : 'claro'}`}
                    >
                        <FontAwesomeIcon icon={isLight ? faMoon : faSun} />
                    </button>
                    <button
                        className={`${styles.iconButton} ${styles.menuToggle}`}
                        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Menu;
