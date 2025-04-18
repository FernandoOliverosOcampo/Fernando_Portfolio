import { useState, useEffect } from 'react'
import Menu from './components/Menu/Menu'
import './styles/theme.css'
import Sections from './components/Sections/Sections'
import Footer from './components/Footer/Footer'

function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Cargar tema guardado o usar el predeterminado
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <div className={`app ${theme}`}>
            <Menu onThemeChange={toggleTheme} currentTheme={theme} />
            <Sections />
            <Footer />
        </div>
    )
}

export default App
