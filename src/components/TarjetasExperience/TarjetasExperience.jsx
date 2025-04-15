import React from 'react';
import styles from './TarjetasExperience.module.css';

const TarjetasExperience = () => {
    const experiencias = [
        {
            id: 1,
            titulo: "Equiti - Findii",
            empresa: "Equiti - Findii",
            fecha: "01/11/2023 - 29/02/2024",
            actividades: [
                {
                    titulo: "Implementación de servidor local:",
                    descripcion: "Implementé un servidor local usando Microsoft Windows Server 2019 con directivas de grupos fortaleciendo la seguridad de la red y gestionando el acceso a páginas web, dispositivos de almacenamiento extraíbles y aplicaciones."
                },
                {
                    titulo: "CRM - Plataforma web:",
                    descripcion: "La plataforma contiene distintas operaciones CRUD según el usuario, gráficas de estadísticas de las ventas realizadas, por realizar, promedios, entre otras. Se realizó usando HTML, CSS y JavaScript. Las consultas a la BD (supabase) se hacían mediante una API creada con Python usando Flask. Esto permitió llevar un mejor control de las ventas, se evitaba el ingreso erróneo de datos, el seguimiento en tiempo real de las ventas e incluir estadísticas relacionadas a ventas."
                }
            ],
            herramientas: [
                { nombre: "CSS", icono: "/img/css.png" },
                { nombre: "HTML", icono: "/img/html5.png" },
                { nombre: "JavaScript", icono: "/img/javascript.png" },
                { nombre: "Python", icono: "/img/python.png" },
                { nombre: "Flask", icono: "/img/flask.png" },
                { nombre: "SQL", icono: "/img/sql.png" }
            ],
            imagen: "/img/equiti.webp"
        },
        {
            id: 2,
            titulo: "Alcaldía Municipal de Manatí",
            empresa: "Alcaldía Municipal de Manatí",
            fecha: "01/08/2023 - 01/11/2023",
            actividades: [
                {
                    titulo: "Diseño y verificación de accesorios y dispositivos de redes:",
                    descripcion: "Diseñé, analicé e implementé los requerimientos iniciales de la infraestructura de datos, se verificaron los accesorios y dispositivos de redes en la lista de adquisición y/o compras."
                },
                {
                    titulo: "Implementación e instalación de cableado y dispositivos de red:",
                    descripcion: "Desmonté e implementé el nuevo cableado, instalación de patch panel, punto físico de red (jack) de voz y datos en 10 oficinas. Instalé y configuré router, Access point, y acceso a internet según disposición del proveedor ISP."
                }
            ],
            herramientas: [],
            imagen: "/img/alcaldia.png"
        }
    ];

    return (
        <div className={styles.tarjetasExperience}>
            {experiencias.map((experiencia) => (
                <div key={experiencia.id} className={styles.tarjetaExperience}>
                    <div className={styles.imagenTarjeta}>
                        <img src={experiencia.imagen} alt={experiencia.empresa} />
                    </div>
                    <h3 className={styles.tarjetaTitle}>{experiencia.titulo}</h3>
                    <div className={styles.tarjetaFecha}>
                        <p>{experiencia.fecha}</p>
                    </div>
                    <div className={styles.listaActividades}>
                        {experiencia.actividades.map((actividad, index) => (
                            <div key={index} className={styles.actividadItem}>
                                <h4>{actividad.titulo}</h4>
                                <p>{actividad.descripcion}</p>
                            </div>
                        ))}
                    </div>
                    {experiencia.herramientas.length > 0 && (
                        <>
                            <h4 className={styles.herramientasTitulo}>Herramientas usadas:</h4>
                            <div className={styles.herramientas}>
                                {experiencia.herramientas.map((herramienta, index) => (
                                    <p key={index}>
                                        <img src={herramienta.icono} alt={herramienta.nombre} />
                                        {herramienta.nombre}
                                    </p>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TarjetasExperience; 