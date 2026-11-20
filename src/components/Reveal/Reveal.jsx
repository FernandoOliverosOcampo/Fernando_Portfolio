import { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';

const Reveal = ({ children, delay = 0, className = '' }) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`${styles.reveal} ${visible ? styles.visible : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default Reveal;
