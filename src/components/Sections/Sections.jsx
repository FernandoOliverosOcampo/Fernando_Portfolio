import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Skills from '../Skills/Skills';
import TarjetasExperience from '../TarjetasExperience/TarjetasExperience';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Reveal from '../Reveal/Reveal';
import { masProyectos } from '../../../constants.js';

const Sections = () => (
    <>
        <Hero />
        <About />
        <Skills />

        <section id="experiencia" className="section">
            <div className="container">
                <Reveal className="section-header">
                    <span className="section-eyebrow">Experiencia</span>
                    <h2 className="section-title">Experiencia profesional</h2>
                    <p className="section-subtitle">
                        A lo largo de mi carrera, he trabajado en diversos proyectos que me han permitido desarrollar
                        habilidades técnicas y blandas. Aquí te presento algunos de mis roles más destacados:
                    </p>
                </Reveal>
                <TarjetasExperience />
            </div>
        </section>

        <section id="proyectos" className="section section-alt">
            <div className="container">
                <Reveal className="section-header">
                    <span className="section-eyebrow">Portafolio</span>
                    <h2 className="section-title">Proyectos destacados</h2>
                    <p className="section-subtitle">
                        Una selección de proyectos Frontend, Backend y de datos. Filtra por tecnología para encontrar lo que buscas.
                    </p>
                </Reveal>
                <Projects />
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
                    <a target="_blank" rel="noopener noreferrer" href={masProyectos} className="btn btn-outline">
                        <FontAwesomeIcon icon={faGithub} /> Ver más proyectos en GitHub
                    </a>
                </div>
            </div>
        </section>

        <Contact />
    </>
);

export default Sections;
