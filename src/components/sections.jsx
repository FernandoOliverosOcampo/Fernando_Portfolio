import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import TarjetasExperience from './tarjetas-experience'
const Sections = () => {
    const whatsappIcon = <FontAwesomeIcon icon={faWhatsapp} />
    const whatsappLink = "https://wa.me/573058290062"
    const cvLink = "https://drive.google.com/file/d/1BsbBF-ZZE5LNcSrSJBchi6B9hdbGZIg4/view?usp=sharing"
    const cvIcon = <FontAwesomeIcon icon={faFile} />
    const experienceIcon = <FontAwesomeIcon icon={faBriefcase} />
    const portfolioIcon = <FontAwesomeIcon icon={faFolder} />
    const masProyectos = "https://github.com/FernandoOliverosOcampo?tab=repositories"
    return (
        <div className="sections-wrapper">
            {/* Sección de about */}
            <section id="about" className="section-container">
                <div className="contenido-about">
                    <div className="container-info">
                        <div className="texto-container">
                            <h1>¿Quién soy?</h1>
                            <p>
                                Soy un desarrollador web con una pasión por crear soluciones tecnológicas innovadoras. Comprometido en desarrollar aplicaciones web de alta calidad.
                            </p>
                        </div>
                        <div className="container-botones">
                            <div className="boton-cv">
                                <a target="_blank" href={cvLink}>
                                    <button>
                                        Hoja de vida &nbsp;
                                        {cvIcon}
                                    </button>
                                </a>
                            </div>
                                    
                            <div className="boton-wp">
                                <a target="_blank" href={whatsappLink}> 
                                    <button>
                                        Contactame &nbsp;
                                        {whatsappIcon}
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container-imagen">
                        <div className="imagen-container">
                            <img src='../src/assets/img/imagen.webp' alt="about" />
                        </div>
                    </div>
                </div>        
            </section>

            {/* Sección de experiencia */}
            <section id="experience" className="section-container">
                <div className="container-experience">
                    <div className="cabecera-experience">
                        <div className="titulo-experience">
                            <h1>{experienceIcon} Experiencia laboral</h1>
                        </div>
                    </div>
                    <div className="descripcion-experience">
                        <div className="contenido-experience">
                            <p>He tenido experiencia laboral siendo practicante en <b>Alcaldia Municipal de Manatí</b> como <b>Auxiliar de
                            sistemas</b>  en el area de redes, el cual me ha permitido tener la oportunidad montar una red implementando elementos como <b>Patch Panels, Switches, Router</b> manejando un cableado de <b>CAT6.</b></p>
                            <br></br>
                            <p>De igual manera, trabajé dando soporte en el área tecnológica en la compañia <b>Equiti - Findii</b>, Al mismo tiempo que desempeñana como <b>desarrollador web</b> llegando a crear una plataforma web para el análisis y seguimiento en tiempo real de estadísticas de ventas de asesores, mejorando la eficiencia operativa y la toma de decisiones estratégicas de la empresa.</p>
                        </div>          
                    </div>
                </div>

                {/* Tarjetas de experiencia */}
                <div className="tarjetas-experience">
                    <div className="tarjeta-experience">
                        <div className="tarjeta-title">
                            <div className="imagen-tarjeta">
                                <div className="tarjeta-imagen">
                                    <img src='../src/assets/img/alcaldia.png' alt="about" />
                                </div>
                            </div>
                           
                            <div className="tarjeta-texto">
                                <div className="title-tarjeta">
                                    <h2>Alcaldia Municipal de Manatí</h2>
                                </div>
                                <div className="tarjeta-fecha">
                                    <p>01/08/2023 - 01/11/2023</p>
                                </div>
                            </div>
                        </div>

                        <div className="tarjeta-cuerpo">
                            <div className="tarjeta-descripcion">
                                <ul className="lista-actividades">
                                    <li><b>Diseño y verificación de accesorios y dispositivos de redes:</b> Diseñé, análizé e implementé los requerimientos iniciales de la infraestructura de datos, se verificaron los accesorios y dispositivos de redes en la lista de adquisición y/o compras.</li>

                                    <li><b>Implementación e instalación de cableado y dispositivos de red:</b> Desmonté e implementé el nuevo cableado, instalación de patch panel, punto fisico de red (jack) de voz y datos en 10 oficinas. Instalé y configuré router, Access point, y acceso a internet según disposición del proveedor ISP.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="tarjeta-experience">
                        <div className="tarjeta-title">
                            <div className="imagen-tarjeta">
                                <div className="tarjeta-imagen">
                                    <img src='../src/assets/img/equiti.webp' alt="about" />
                                </div>
                            </div>
                          
                            <div className="tarjeta-texto">
                                <div className="title-tarjeta">
                                    <h2>Equiti - Findii</h2>
                                </div>
                                <div className="tarjeta-fecha">
                                    <p>01/11/2023 - 29/02/2024</p>
                                </div>
                            </div>
                        </div>

                        <div className="tarjeta-cuerpo">
                            <div className="tarjeta-descripcion">
                                <ul className="lista-actividades">
                                    <li><b>Implementación de servidor local: </b> Implementé un servidor local usando Microsoft Windows Server 2019 con directivas de grupos fortaleciendo la seguridad de la red y gestionando el acceso a páginas web, dispositivos de almacenamiento extraíbles y aplicaciones. </li>

                                    <li><b>CRM - Plataforma web:</b> La plataforma contiene distintas operaciones CRUD según el usuario, gráficas de estadísticas de las ventas realizadas, por realizar, promedios, entre otras. Se realizó usando HTML, CSS y JavaScript. Las consultas a la BD (supabase) se hacian mediante una API creada con Python usando Flask. Esto permitió llevar un mejor control de las ventas, se evitaba el ingreso erróneo de datos, el seguimiento en tiempo real de las ventas e incluir estadísticas relacionadas a ventas.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="tarjeta-footer">
                            <div className="herramientas">
                                <p>Herramientas usadas:</p>
                                <ul>
                                    <img src='../src/assets/img/python.png' alt="about" />
                                    <img src='../src/assets/img/flask.png' alt="about" />
                                    <img src='../src/assets/img/html5.png' alt="about" />
                                    <img src='../src/assets/img/css.png' alt="about" />
                                    <img src='../src/assets/img/javascript.png' alt="about" />
                                    <img src='../src/assets/img/sql.png' alt="about" />
                                    <img src='../src/assets/img/supa.png' alt="about" />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*Sección de proyectos*/}
            <section id="portfolio" className="section-container">
                {/* Contenido del portafolio */}
                <div className="container-portfolio">
                    <div className="titulo-proyectos">
                        <h2>{portfolioIcon} Proyectos</h2>
                    </div>
                    <div className="container-proyectos-slider">
                        <TarjetasExperience /> 
                    </div>
                    <div className="ver-mas-proyectos">
                        <a target="_blank" href={masProyectos}>
                            <button>Ver más proyectos</button>
                        </a>
                    </div>
                </div>
              
            </section>
        </div>
    )
}

export default Sections;