import { supabase } from '../../supabase.js'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const TarjetasExperience = () => {
    const [projects, setProjects] = useState([])
   
    useEffect(() => {
        const fetchData = async () => {
            const {data, error} = await supabase.from('Datosproyecto').select('*')
            if(error){
                console.log(error)
            }else{
                setProjects(data)
            }
        }
        fetchData()
    }, [])
    
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

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {projects.map((project) => (
                    <div key={project.id} className="tarjeta-proyectos">
                        <div className="titulo-proyecto">
                            <h2>{project.titulo}</h2>
                        </div>
                        <div className="leguajes-proyecto">
                            {project.imagenes.split(',').map((icono, index) => (
                                <img key={index} src={icono.trim()} alt={`Tecnología ${index + 1}`} />
                            ))}
                        </div>
                        <div className="descripcion-proyecto">
                            <p>{project.descripcion}</p>
                        </div>
                        <div className="button-proyecto">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <button>Ver repositorio en github</button>
                            </a>
                            {project.url !== "no" && (
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
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

export default TarjetasExperience;
