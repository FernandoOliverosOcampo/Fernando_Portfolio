import '../menu.css'
import { useState, useEffect } from 'react'

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
    
    // Observador de intersección para destacar el elemento de menú activo durante el scroll
    useEffect(() => {
        const sections = menuItems.map(item => document.getElementById(item.id));
        
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            
            // Obtener la altura del menú para considerarla en los cálculos
            const menuHeight = document.querySelector('.menu').offsetHeight;
            
            // Encontrar la sección actualmente visible
            const currentSection = sections.find((section, index) => {
                if (!section) return false;
                
                const sectionTop = section.offsetTop - menuHeight - 50;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                // Si es la última sección, considerarla activa hasta el final de la página
                if (index === sections.length - 1) {
                    return scrollPosition >= sectionTop;
                }
                
                return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
            });
            
            if (currentSection) {
                setActiveItem(currentSection.id);
            }
        };
        
        // Ejecutar al cargar
        handleScroll();
        
        // Ejecutar al hacer scroll
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
        
        // Prevenir comportamiento por defecto
        event.preventDefault();
        
        // Obtener el elemento target basado en el href
        const targetId = menuItems.find(item => item.id === itemId)?.href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            // Obtener la altura del menú para el offset
            const menuHeight = document.querySelector('.menu').offsetHeight;
            
            // Calcular la posición con offset
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - menuHeight - 20;
            
            // Desplazamiento suave
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
            className="theme-toggle"
            onClick={handleThemeChange}
            aria-label={`Cambiar a tema ${currentTheme === 'light' ? 'oscuro' : 'claro'}`}
        >
            {currentTheme === 'light' ? '🌙' : '☀️'}
        </button>
    );

    return (
       <header className="menu">
            <div className="menu-container">
                <div className="menu-logo">
                    Fernando's Portfolio
                </div>
                
                <div className="menu-controls">
                    <button 
                        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        aria-label="Abrir menú"
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>

                <nav 
                    className={`menu-options ${isMenuOpen ? 'active' : ''}`}
                    role="navigation"
                    aria-label="Menú principal"
                >
                    {isMobile && (
                        <div className="theme-toggle-container">
                            <ThemeToggleButton />
                        </div>
                    )}
                    
                    {menuItems.map((item) => (
                        <div 
                            className={`menu-item ${activeItem === item.id ? 'active' : ''}`} 
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
                        <div className="menu-item theme-toggle-container">
                            <ThemeToggleButton />
                        </div>
                    )}
                </nav>
            </div> 
       </header>
    )
}

export default Menu;
