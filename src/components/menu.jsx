import '../menu.css'
import { useState } from 'react'

const Menu = ({ onThemeChange, currentTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    const menuItems = [
        { id: 'about', label: '¿Quién soy?', href: '#about' },
        { id: 'experience', label: 'Experiencia', href: '#experience' },
        { id: 'portfolio', label: 'Portafolio', href: '#portfolio' }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleItemClick = (itemId) => {
        setActiveItem(itemId);
        if (window.innerWidth <= 768) {
            setIsMenuOpen(false);
        }
    };

    return (
       <header className="menu">
            <div className="menu-container">
                <div className="menu-logo">
                    Fernando's Portfolio
                </div>
                
                <div className="menu-controls">
                    <button 
                        className="theme-toggle"
                        onClick={onThemeChange}
                        aria-label={`Cambiar a tema ${currentTheme === 'light' ? 'oscuro' : 'claro'}`}
                    >
                        {currentTheme === 'light' ? '🌙' : '☀️'}
                    </button>

                    <button 
                        className="menu-toggle"
                        aria-label="Abrir menú"
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                    >
                        <span className="hamburger"></span>
                    </button>
                </div>

                <nav 
                    className={`menu-options ${isMenuOpen ? 'active' : ''}`}
                    role="navigation"
                    aria-label="Menú principal"
                >
                    {menuItems.map((item) => (
                        <div 
                            className={`menu-item ${activeItem === item.id ? 'active' : ''}`} 
                            key={item.id}
                        >
                            <a 
                                href={item.href} 
                                className="smooth-scroll"
                                aria-label={`Ir a la sección ${item.label}`}
                                onClick={() => handleItemClick(item.id)}
                            >
                                {item.label}
                            </a>
                        </div>
                    ))}
                </nav>
            </div> 
       </header>
    )
}

export default Menu;
