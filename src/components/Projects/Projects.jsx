import {useEffect, useState} from 'react';
import {supabase} from '../../../supabase.js';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from './Projects.module.css'

const Projects = () =>{

    const [project, setProject] = useState([])

    useEffect(()=>{
        const fetchData =  async () =>{
                const {data, error} = await supabase.from('Datosproyecto').select('*')
                if(error){
                    console.error('Eroor en la información', error)
                }
                else{
                    setProject(data)
                }
        }
        fetchData()
    }, [])
        // Función para normalizar las rutas de las imágenes
    const normalizarRuta = (ruta) => {
        ruta = ruta.trim();
            
            // Si ya es una URL completa o una ruta absoluta, la devolvemos como está
        if (ruta.startsWith('http') || ruta.startsWith('/')) {
            return ruta;
        }
            
            // Si es una ruta que comienza con src/assets, la convertimos a /img/
        if (ruta.includes('src/assets/img/')) {
            return ruta.replace('src/assets/img/', '/img/');
        }
            
            // Si es sólo el nombre del archivo, asumimos que está en /img/
        return `/img/${ruta}`;
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: true,
        centerMode: true,
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0'
                }
            }
        ]
    }

    return(
        <div className={styles["slider-container"]}>
            <Slider {...settings}>
                {project.map((projects) => (
                    <div key={projects.id} className={styles["tarjeta-proyectos"]}>
                        <div className={styles["titulo-proyecto"]}>
                            <h2>{projects.titulo}</h2>
                        </div>
                        <div className={styles["leguajes-proyecto"]}>
                            {projects.imagenes.split(',').map((icono, index) => (
                                <img key={index} src={normalizarRuta(icono)} alt={`Tecnología ${index + 1}`} />
                            ))}
                        </div>
                        <div className={styles["descripcion-proyecto"]}>
                            <p>{projects.descripcion}</p>
                        </div>
                        <div className={styles["button-proyecto"]}>
                            <a href={projects.github} target="_blank" rel="noopener noreferrer">
                                <button>Ver repositorio en github</button>
                            </a>
                            {projects.url !== "no" && (
                                <a href={projects.url} target="_blank" rel="noopener noreferrer">
                                    <button>Visitar página</button>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )

}

export default Projects;