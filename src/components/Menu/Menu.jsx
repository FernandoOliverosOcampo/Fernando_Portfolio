import { useState, useEffect } from 'react'
import styles from './Menu.module.css'

const Menu = ({ onThemeChange, currentTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    const menuItems = [
        { id: 'about', label: '¿Quién soy?', href: '#about' },
        { id: 'experience', label: 'Experiencia', href: '#experience' },
        { id: 'portfolio', label: 'Portafolio', href: '#portfolio' }
    ];

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);
    
    useEffect(() => {
        const sections = menuItems.map(item => document.getElementById(item.id));
        
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const menuHeight = document.querySelector(`.${styles.menu}`).offsetHeight;
            
            const currentSection = sections.find((section, index) => {
                if (!section) return false;
                
                const sectionTop = section.offsetTop - menuHeight - 50;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (index === sections.length - 1) {
                    return scrollPosition >= sectionTop;
                }
                
                return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
            });
            
            if (currentSection) {
                setActiveItem(currentSection.id);
            }
        };
        
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleItemClick = (itemId, event) => {
        setActiveItem(itemId);
        event.preventDefault();
        
        const targetId = menuItems.find(item => item.id === itemId)?.href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const menuHeight = document.querySelector(`.${styles.menu}`).offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - menuHeight - 20;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        
        if (window.innerWidth <= 768) {
            setIsMenuOpen(false);
        }
    };
    
    const handleThemeChange = () => {
        onThemeChange();
        if (isMobile && isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    const ThemeToggleButton = () => (
        <button 
            className={styles.themeToggle}
            onClick={handleThemeChange}
            aria-label={`Cambiar a tema ${currentTheme === 'light' ? 'oscuro' : 'claro'}`}
        >
            {currentTheme === 'light' ? '🌙' : '☀️'}
        </button>
    );

    return (
       <header className={styles.menu}>
            <div className={styles.menuContainer}>
                <div className={styles.menuLogo}>
                    Fernando's Portfolio
                </div>
                
                <div className={styles.menuControls}>
                    <button 
                        className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
                        aria-label="Abrir menú"
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                    >
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>
                </div>

                <nav 
                    className={`${styles.menuOptions} ${isMenuOpen ? styles.active : ''}`}
                    role="navigation"
                    aria-label="Menú principal"
                >
                    {isMobile && (
                        <div className={styles.themeToggleContainer}>
                            <ThemeToggleButton />
                        </div>
                    )}
                    
                    {menuItems.map((item) => (
                        <div 
                            className={`${styles.menuItem} ${activeItem === item.id ? styles.active : ''}`} 
                            key={item.id}
                        >
                            <a 
                                href={item.href} 
                                className="smooth-scroll"
                                aria-label={`Ir a la sección ${item.label}`}
                                onClick={(event) => handleItemClick(item.id, event)}
                            >
                                {item.label}
                            </a>
                        </div>
                    ))}
                    
                    {!isMobile && (
                        <div className={`${styles.menuItem} ${styles.themeToggleContainer}`}>
                            <ThemeToggleButton />
                        </div>
                    )}
                </nav>
            </div> 
       </header>
    )
}

export default Menu; 