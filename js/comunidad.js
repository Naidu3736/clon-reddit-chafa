const baseDatos = {
    configuracion_global: {
        usuario_actual: {
            nombre: 'Astra',
            avatar: '../images/Ryoicon.jpg'
        },
        interfaz: {
            logo: '../images/logo.gif',
            iconos: {
                busqueda: '../images/lupa.png',
                menu: '../images/menu.png',
                comentarios: '../images/comentarios.png',
                notificaciones: '../images/notificacion.png'
            }
        }
    },
    comunidades: [
        {
            id: 'fcc',
            nombre: 'x/Comunidad FCC',
            imagenes_principales: {
                banner: '../images/Banner.gif',
                logo: '../images/LogoComunidad.jpg'
            },
            informacion: {
                descripcion: 'Bienvenidos a la comunidad de FFC! Aquí compartimos recursos, proyectos y experiencias relacionados con el desarrollo web. ¡Únete a nosotros para aprender, colaborar y crecer juntos en el mundo del código!',
                estadisticas: {
                    miembros: '10,000',
                    publicaciones: '500',
                    moderadores: '5'
                }
            },
            publicaciones_destacadas: [
                { titulo: '¿Alguien me ayuda a reparar mi computadora?', fondo: '../images/post1.gif' },
                { titulo: '¿Que hacen de pasatiempo?', fondo: '../images/post2.gif' },
                { titulo: 'Recomienden distro de Linux', fondo: '../images/post3.gif' }
            ],
            muro: [
                {
                    autor: 'u/astr4x_0',
                    avatar_autor: '../images/Ryoicon.jpg',
                    tiempo: 'Hace 10 minutos',
                    titulo: 'Bonito ASCCI Art',
                    contenido_texto: 'Miren este bonito arte ASCII!',
                    imagen_publicacion: '../images/imagenpublicacion.jpg'
                },
                {
                    autor: 'u/jvl7_0',
                    avatar_autor: '../images/avatar2.jpg',
                    tiempo: 'Hace 40 minutos',
                    titulo: 'Que tal mi escritorio',
                    contenido_texto: 'I use arch btw',
                    imagen_publicacion: '../images/postp2.jpg'
                },
                {
                    autor: 'u/moonlight120',
                    avatar_autor: '../images/avatar3.jpg',
                    tiempo: 'Hace 3 horas',
                    titulo: 'Cual es su proyecto mas reciente?',
                    contenido_texto: '',
                    imagen_publicacion: '../images/postp3.jpg'
                }
            ]
        },
        {
            id: 'hacking',
            nombre: 'x/Hacking',
            imagenes_principales: {
                banner: '../images/BannerHacking.gif',
                logo: '../images/LogoHacking.gif'
            },
            informacion: {
                descripcion: 'Comunidad dedicada a la ciberseguridad, pentesting y análisis de vulnerabilidades. Sé ético.',
                estadisticas: {
                    miembros: '15,200',
                    publicaciones: '1,200',
                    moderadores: '8'
                }
            },
            publicaciones_destacadas: [],
            muro: [
                {
                    autor: 'u/mrrobot_99',
                    avatar_autor: '../images/Mrroboticon.jpg',
                    tiempo: 'Hace 2 horas',
                    titulo: 'Duda con Nmap,¿Qué flags recomiendan para evasión de firewalls?',
                    contenido_texto: '',
                    imagen_publicacion: '../images/posth1.gif'
                },
                 {
                    autor: 'u/ilovearch123',
                    avatar_autor: '../images/avatarh2.jpg',
                    tiempo: 'Hace 5 horas',
                    titulo: 'Como empezar en el mundo del hacking?<br>Soy nuevo en esto, ¿alguna recomendación?',
                    contenido_texto: '',
                    imagen_publicacion: '../images/posth2.jpg'
                }
            ]
        },
        {
            id: 'arte_digital',
            nombre: 'x/Arte Digital',
            imagenes_principales: {
                banner: '../images/BannerArte.jpg',
                logo: '../images/logoarte.gif'
            },
            informacion: {
                descripcion: 'Espacio para ilustradores y diseñadores. Comparte tus trazos, paletas y descubre nuevas técnicas.',
                estadisticas: {
                    miembros: '8,400',
                    publicaciones: '3,100',
                    moderadores: '4'
                }
            },
            publicaciones_destacadas: [],
            muro: [
                {
                    autor: 'u/Astra',
                    avatar_autor: '../images/Ryoicon.jpg',
                    tiempo: 'Hace 5 horas',
                    titulo: 'WIP',
                    contenido_texto: '',
                    imagen_publicacion: '../images/postart.png'
                },
            ]
        },
        {
            id: 'algoritmos',
            nombre: 'x/Algoritmos',
            imagenes_principales: {
                banner: '../image/banneralgo.gif',
                logo: '../images/alop.gif'
            },
            informacion: {
                descripcion: 'Optimización, estructuras de datos y resolución de problemas. Preparación para entrevistas.',
                estadisticas: {
                    miembros: '12,000',
                    publicaciones: '800',
                    moderadores: '6'
                }
            },
            publicaciones_destacadas: [],
            muro: [
                {
                    autor: 'u/codexmaster',
                    avatar_autor: '',
                    tiempo: 'Hace 3 horas',
                    titulo: '¿Alguien ha trabajado con algoritmos de optimización?',
                    contenido_texto: 'Estoy buscando información sobre algoritmos de optimización para un proyecto personal.',
                    imagen_publicacion: ''
                }
            ]
        },
        {
            id: 'mineria_datos',
            nombre: 'x/Minería de Datos',
            imagenes_principales: {
                banner: '../image/bannermineria.gif',
                logo: '../images/Minico.jpg'
            },
            informacion: {
                descripcion: 'Discusión sobre clasificación, clustering, Naïve Bayes, normalización (Z-Score, Min-Max) y procesamiento de datasets.',
                estadisticas: {
                    miembros: '5,300',
                    publicaciones: '420',
                    moderadores: '3'
                }
            },
            publicaciones_destacadas: [],
            muro: [
                {
                    autor: 'u/datascientist_01',
                    avatar_autor: '',   
                    tiempo: 'Hace 1 hora',
                    titulo: '¿Cómo manejar datos faltantes en un dataset?',
                    contenido_texto: 'Estoy trabajando con un dataset que tiene valores faltantes. ¿Cuáles son las mejores prácticas para manejar esto?',
                    imagen_publicacion: ''
                }
            ]
        }
    ]
};

const inputBusqueda = document.getElementById('inputBusqueda');
const menuDesplegable = document.getElementById('menuDesplegableBusqueda');
const contenedorBusqueda = document.getElementById('contenedorBusqueda');
const listaResultados = document.getElementById('listaResultados');

const tituloPrincipal = document.querySelector('.tituloprincipal');
const fondoPortada = document.querySelector('.fondodeportada');
const avatarPrincipal = document.querySelector('.avatarprincipal');
const descripcionComunidad = document.querySelector('.informacioncomunidad p');
const contenedorEstadisticas = document.querySelector('.estadisticas');
const contenedorLadoIzquierdo = document.querySelector('.ladoizquierdo');
const cabeceraIzquierda = document.querySelector('.cabeceraizquierda');
const publicacionesDestacadas = document.querySelector('.publicacionesdestacadas');

const esPaginaComunidad = Boolean(
    tituloPrincipal &&
    fondoPortada &&
    avatarPrincipal &&
    descripcionComunidad &&
    contenedorEstadisticas &&
    contenedorLadoIzquierdo &&
    cabeceraIzquierda &&
    publicacionesDestacadas
);

const tieneBuscador = Boolean(inputBusqueda && menuDesplegable && contenedorBusqueda && listaResultados);

if (tieneBuscador) {
    inputBusqueda.addEventListener('focus', () => menuDesplegable.classList.add('activo'));

    document.addEventListener('click', (event) => {
        if (!contenedorBusqueda.contains(event.target)) {
            menuDesplegable.classList.remove('activo');
        }
    });

    const inicializarBuscador = () => {
        listaResultados.innerHTML = '';

        baseDatos.comunidades.forEach((comunidad) => {
            const li = document.createElement('li');
            li.textContent = comunidad.nombre;

            li.addEventListener('click', () => {
                inputBusqueda.value = comunidad.nombre;
                menuDesplegable.classList.remove('activo');

                if (esPaginaComunidad) {
                    cargarComunidad(comunidad.id);
                }
            });

            listaResultados.appendChild(li);
        });
    };

    inicializarBuscador();
}

const cargarComunidad = (idComunidad) => {
    if (!esPaginaComunidad) {
        return;
    }

    const datos = baseDatos.comunidades.find((comunidad) => comunidad.id === idComunidad);
    if (!datos) {
        return;
    }

    tituloPrincipal.textContent = datos.nombre;
    fondoPortada.style.backgroundImage = `url('${datos.imagenes_principales.banner}')`;
    avatarPrincipal.style.backgroundImage = `url('${datos.imagenes_principales.logo}')`;

    descripcionComunidad.innerHTML = datos.informacion.descripcion;
    contenedorEstadisticas.innerHTML = `
        <br>
        <p>Miembros: ${datos.informacion.estadisticas.miembros}</p>
        <p>Publicaciones: ${datos.informacion.estadisticas.publicaciones}</p>
        <p>Moderadores: ${datos.informacion.estadisticas.moderadores}</p>
    `;

    renderizarMuro(datos.muro);
};

const renderizarMuro = (muroDatos) => {
    if (!esPaginaComunidad) {
        return;
    }

    const htmlactualizado = 
        cabeceraIzquierda.outerHTML +
        publicacionesDestacadas.outerHTML +
        '<hr class="lineadeseparacion">' +
        muroDatos
            .map((post) => `
                <div class="publicacionenmuro">
                    <div class="encabezadopublicacion">
                        <div class="avatarminiatura" style="background-image: url('${post.avatar_autor}');"></div>
                        <span>${post.autor} • ${post.tiempo}</span>
                    </div>
                    <h3 class="titulopublicacion">${post.titulo}</h3>
                    <div class="contenidopublicacion" style="background-image: url('${post.imagen_publicacion}');">
                        ${post.contenido_texto}
                    </div>
                </div>
                <br>
            `)
            .join('');

    contenedorLadoIzquierdo.innerHTML = htmlactualizado;
};

if (esPaginaComunidad) {
    cargarComunidad('fcc');
}