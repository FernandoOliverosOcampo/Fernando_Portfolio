export const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' }
];

export const servicios = [
    {
        icono: 'code',
        titulo: 'Desarrollo Frontend',
        descripcion: 'Interfaces responsivas, intuitivas y atractivas con HTML, CSS, JavaScript y React.'
    },
    {
        icono: 'server',
        titulo: 'Backend y APIs',
        descripcion: 'APIs con Python y Flask, bases de datos SQL y Supabase para centralizar la lógica de negocio.'
    },
    {
        icono: 'chart',
        titulo: 'Datos y reportes',
        descripcion: 'Dashboards y reportes con Python, Pandas, SQL y Power BI para tomar mejores decisiones.'
    },
    {
        icono: 'network',
        titulo: 'Infraestructura y redes',
        descripcion: 'Servidores Windows Server, directivas de grupo, cableado estructurado y configuración de redes.'
    }
];

export const habilidades = [
    {
        categoria: 'Frontend',
        items: [
            { nombre: 'HTML5', icono: '/img/html5.png' },
            { nombre: 'CSS3', icono: '/img/css.png' },
            { nombre: 'JavaScript', icono: '/img/javascript.png' },
            { nombre: 'React', icono: '/img/react.png' },
            { nombre: 'Bootstrap', icono: '/img/bootstrap.png' }
        ]
    },
    {
        categoria: 'Backend y datos',
        items: [
            { nombre: 'Python', icono: '/img/python.png' },
            { nombre: 'Flask', icono: '/img/flask.png' },
            { nombre: 'Java', icono: '/img/java.png' },
            { nombre: 'SQL', icono: '/img/sql.png' },
            { nombre: 'Supabase', icono: '/img/supa.png' },
            { nombre: 'Pandas', icono: '/img/pandas.png' }
        ]
    },
    {
        categoria: 'Herramientas',
        items: [
            { nombre: 'Git', icono: '/img/git.png' },
            { nombre: 'Axios', icono: '/img/axios.png' },
            { nombre: 'WordPress', icono: '/img/wordpress.png' }
        ]
    }
];

export const experiencias = [
    {
        id: 3,
        empresa: 'Institución Educativa Maruja del Rosario Aguilar',
        cargo: 'Ingeniero de Sistemas – Área de Soporte',
        fecha: 'Mar 2024 — Abr 2025',
        actividades: [
            {
                titulo: 'Plataformas institucionales',
                descripcion: 'Administración y soporte de plataformas institucionales, gestión y soporte técnico en la plataforma SIMAT, y manejo y soporte en la plataforma EVI.'
            },
            {
                titulo: 'Página web institucional',
                descripcion: 'Creación y mantenimiento de la página web institucional.'
            },
            {
                titulo: 'Infraestructura tecnológica y equipos',
                descripcion: 'Soporte en infraestructura tecnológica y redes de la institución, mantenimiento preventivo y correctivo de equipos de cómputo, y gestión documental digital y respaldo de información.'
            },
            {
                titulo: 'Asistencia técnica',
                descripcion: 'Asistencia técnica a docentes, estudiantes y personal administrativo.'
            }
        ],
        herramientas: [
            { nombre: 'React', icono: '/img/react.png' },
            { nombre: 'CSS', icono: '/img/css.png' },
            { nombre: 'JavaScript', icono: '/img/javascript.png' }
        ],
        imagen: '/img/maruja.webp'
    },
    {
        id: 1,
        empresa: 'Equiti - Findii',
        fecha: 'Nov 2023 — Feb 2024',
        actividades: [
            {
                titulo: 'Implementación de servidor local',
                descripcion: 'Implementé un servidor local usando Microsoft Windows Server 2019 con directivas de grupos fortaleciendo la seguridad de la red y gestionando el acceso a páginas web, dispositivos de almacenamiento extraíbles y aplicaciones.'
            },
            {
                titulo: 'CRM - Plataforma web',
                descripcion: 'La plataforma contiene distintas operaciones CRUD según el usuario, gráficas de estadísticas de las ventas realizadas, por realizar, promedios, entre otras. Se realizó usando HTML, CSS y JavaScript. Las consultas a la BD (supabase) se hacían mediante una API creada con Python usando Flask. Esto permitió llevar un mejor control de las ventas, se evitaba el ingreso erróneo de datos, el seguimiento en tiempo real de las ventas e incluir estadísticas relacionadas a ventas.'
            }
        ],
        herramientas: [
            { nombre: 'HTML', icono: '/img/html5.png' },
            { nombre: 'CSS', icono: '/img/css.png' },
            { nombre: 'JavaScript', icono: '/img/javascript.png' },
            { nombre: 'Python', icono: '/img/python.png' },
            { nombre: 'Flask', icono: '/img/flask.png' },
            { nombre: 'SQL', icono: '/img/sql.png' }
        ],
        imagen: '/img/equiti.webp'
    },
    {
        id: 2,
        empresa: 'Alcaldía Municipal de Manatí',
        fecha: 'Ago 2023 — Nov 2023',
        actividades: [
            {
                titulo: 'Diseño y verificación de accesorios y dispositivos de redes',
                descripcion: 'Diseñé, analicé e implementé los requerimientos iniciales de la infraestructura de datos, se verificaron los accesorios y dispositivos de redes en la lista de adquisición y/o compras.'
            },
            {
                titulo: 'Implementación e instalación de cableado y dispositivos de red',
                descripcion: 'Desmonté e implementé el nuevo cableado, instalación de patch panel, punto físico de red (jack) de voz y datos en 10 oficinas. Instalé y configuré router, Access point, y acceso a internet según disposición del proveedor ISP.'
            }
        ],
        herramientas: [],
        imagen: '/img/alcaldia.png'
    }
];
