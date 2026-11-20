import { useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { supabase } from '../../../supabase.js';
import Reveal from '../Reveal/Reveal';
import styles from './Projects.module.css';

const nombresTecnologias = {
    js: 'JavaScript',
    javascript: 'JavaScript',
    html: 'HTML',
    css: 'CSS',
    sql: 'SQL',
    python: 'Python',
    flask: 'Flask',
    supabase: 'Supabase',
    bootstrap: 'Bootstrap',
    powerbi: 'Power BI',
    java: 'Java',
    react: 'React'
};

const normalizarTecnologia = (tecnologia) => {
    const limpia = tecnologia.trim();
    const conocida = nombresTecnologias[limpia.toLowerCase().replace(/\s+/g, '')];
    if (conocida) return conocida;
    return limpia.charAt(0).toUpperCase() + limpia.slice(1).toLowerCase();
};

const obtenerTecnologias = (proyecto) =>
    (proyecto.lenguajes || '')
        .split('+')
        .map((tecnologia) => tecnologia.trim())
        .filter(Boolean)
        .map(normalizarTecnologia);

const normalizarRuta = (ruta) => {
    ruta = ruta.trim();
    if (ruta.startsWith('http') || ruta.startsWith('/')) return ruta;
    if (ruta.includes('src/assets/img/')) return ruta.replace('src/assets/img/', '/img/');
    return `/img/${ruta}`;
};

const tieneDemo = (proyecto) => proyecto.url && proyecto.url.toLowerCase() !== 'no';

const ProjectCard = ({ proyecto, indice }) => {
    const [expandido, setExpandido] = useState(false);
    const iconos = (proyecto.imagenes || '').split(',').filter((icono) => icono.trim());

    return (
        <article className={styles.card}>
            <div className={styles.cardTop}>
                <span className={styles.numero}>{String(indice + 1).padStart(2, '0')}</span>
                <div className={styles.iconos}>
                    {iconos.map((icono, index) => (
                        <img key={index} src={normalizarRuta(icono)} alt="" loading="lazy" />
                    ))}
                </div>
                {tieneDemo(proyecto) && <span className={styles.demoBadge}>Demo en vivo</span>}
            </div>

            <div className={styles.cardBody}>
                <h3 className={styles.titulo}>{proyecto.titulo}</h3>
                <p className={`${styles.descripcion} ${expandido ? styles.expandido : ''}`}>
                    {proyecto.descripcion?.trim()}
                </p>
                {proyecto.descripcion?.length > 180 && (
                    <button className={styles.leerMas} onClick={() => setExpandido(!expandido)}>
                        {expandido ? 'Ver menos' : 'Leer más'}
                    </button>
                )}

                <div className={styles.tags}>
                    {proyecto.tecnologias.map((tecnologia) => (
                        <span key={tecnologia}>{tecnologia}</span>
                    ))}
                </div>
            </div>

            <div className={styles.cardActions}>
                {proyecto.github && (
                    <a href={proyecto.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                        <FontAwesomeIcon icon={faGithub} /> Código
                    </a>
                )}
                {tieneDemo(proyecto) && (
                    <a href={proyecto.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Visitar página
                    </a>
                )}
            </div>
        </article>
    );
};

const Projects = () => {
    const [proyectos, setProyectos] = useState([]);
    const [estado, setEstado] = useState('cargando');
    const [filtro, setFiltro] = useState('Todos');

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from('Datosproyecto').select('*');
            if (error) {
                console.error('Error al cargar los proyectos', error);
                setEstado('error');
                return;
            }
            const ordenados = [...data]
                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                .map((proyecto) => ({ ...proyecto, tecnologias: obtenerTecnologias(proyecto) }));
            setProyectos(ordenados);
            setEstado('listo');
        };
        fetchData();
    }, []);

    const filtros = useMemo(() => {
        const conteo = {};
        proyectos.forEach((proyecto) =>
            proyecto.tecnologias.forEach((tecnologia) => {
                conteo[tecnologia] = (conteo[tecnologia] || 0) + 1;
            })
        );
        const tecnologias = Object.keys(conteo).sort((a, b) => conteo[b] - conteo[a]);
        return ['Todos', ...tecnologias];
    }, [proyectos]);

    const visibles = filtro === 'Todos'
        ? proyectos
        : proyectos.filter((proyecto) => proyecto.tecnologias.includes(filtro));

    if (estado === 'error') {
        return <p className={styles.mensaje}>No se pudieron cargar los proyectos. Intenta de nuevo más tarde.</p>;
    }

    return (
        <>
            {estado === 'listo' && (
                <div className={styles.filtros} role="group" aria-label="Filtrar proyectos por tecnología">
                    {filtros.map((opcion) => (
                        <button
                            key={opcion}
                            className={`${styles.filtro} ${filtro === opcion ? styles.filtroActivo : ''}`}
                            onClick={() => setFiltro(opcion)}
                            aria-pressed={filtro === opcion}
                        >
                            {opcion}
                        </button>
                    ))}
                </div>
            )}

            <div className={styles.grid}>
                {estado === 'cargando'
                    ? Array.from({ length: 3 }, (_, index) => <div key={index} className={styles.skeleton} />)
                    : visibles.map((proyecto, index) => (
                        <Reveal key={proyecto.id_proyecto ?? proyecto.titulo} delay={(index % 3) * 100}>
                            <ProjectCard proyecto={proyecto} indice={proyectos.indexOf(proyecto)} />
                        </Reveal>
                    ))}
            </div>
        </>
    );
};

export default Projects;
