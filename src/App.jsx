import { useState, useEffect } from 'react'
import Menu from './components/Menu/Menu'
import Sections from './components/Sections/Sections'
import Footer from './components/Footer/Footer'

const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

function App() {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <>
            <Menu onThemeChange={toggleTheme} currentTheme={theme} />
            <main>
                <Sections />
            </main>
            <Footer />
        </>
    )
}

export default App
