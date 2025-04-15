import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <p>© {new Date().getFullYear()} Fernando Oliveros. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer; 