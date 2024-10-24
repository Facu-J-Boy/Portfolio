const allProyects = [
  {
    name: 'PI-Videogame',
    time: 'oct. 2022 - nov. 2022',
    technologies: [
      {
        name: 'React',
        icon: '/techSkills/react.svg',
        color: '#61dbfb',
      },
      {
        name: 'Javascript',
        icon: '/techSkills/js.svg',
        color: '#F7DF1E',
      },
      { name: 'CSS', icon: '/techSkills/css3.svg', color: '#264de4' },
      {
        name: 'express',
        icon: '/techSkills/express.svg',
        color: '#000000',
      },
      {
        name: 'PostgreSQL',
        icon: '/techSkills/postgresql.svg',
        color: '#336791',
      },
    ],
    description: `Aplicación en la cual se pueden ver los distintos videojuegos disponibles junto con información relevante de los mismos utilizando la api externa rawg y a partir de ella poder, entre otras cosas: buscar videojuegos, filtrarlos/ordenarlos y agregar nuevos videojuegos`,
    images: '/proyects/PI-Videogame.png',
    buttons: [
      {
        icon: 'arrow',
        text: 'ver',
        url: 'https://pi-videogame-lyart.vercel.app',
      },
      {
        icon: 'code',
        text: 'código',
        url: 'https://github.com/Facu-J-Boy/PI-Videogame',
      },
    ],
    url: 'https://pi-videogame-lyart.vercel.app',
  },
  // {
  //   name: 'Henry-Instrument',
  // time: 'dic. 2022 - ene. 2023',
  //description: `E-commerce de instrumentos musicales en grupo que incluye: autenticación, búsquedas, filtrados combinados,
  //ordenamientos, baneo de usuarios, envío de emails, pasarela de pago, etc.
  //Mi rol fue el de diseñar las tarjetas de los productos, mostrar sus detalles, crear la sección de comentarios y puntuación,
  //notificaciones por mail, etc.`,
  //   images:
  //     '/proyects/Henry-instrument.png',
  // buttons: [
  // {
  //   icon: 'arrow',
  //   text: 'ver',
  //   url: 'https://henry-instruments-nu.vercel.app'
  // },
  // {
  //   icon: 'code',
  //   text: 'código',
  //   url:'https://github.com/Facu-J-Boy/henry_instruments'
  // }
  // ],
  //   url: 'https://henry-instruments-nu.vercel.app',
  // },
  {
    name: 'ToDo',
    time: 'may. 2023 - jun. 2023',
    technologies: [
      {
        name: 'React',
        icon: '/techSkills/react.svg',
        color: '#61dbfb',
      },
      {
        name: 'Typescript',
        icon: '/techSkills/Typescript.svg',
        color: '#3178c6',
      },
      {
        name: 'TailwindCSS',
        icon: '/techSkills/tailwindcss.svg',
        color: '#38B2AC',
      },
      {
        name: 'express',
        icon: '/techSkills/express.svg',
        color: '#000000',
      },
      {
        name: 'PostgreSQL',
        icon: '/techSkills/postgresql.svg',
        color: '#336791',
      },
    ],
    description: `App de lista de tareas donde puedes crearlas, editarlas y eliminarlas de la lista, también cuenta con un sistema de autenticación con firebase.`,
    images: '/proyects/ToDo.png',

    buttons: [
      {
        icon: 'arrow',
        text: 'ver',
        url: 'https://todolist332.netlify.app',
      },
      {
        icon: 'code',
        text: 'código',
        url: 'https://github.com/Facu-J-Boy/ToDo-App',
      },
    ],
    url: 'https://todolist332.netlify.app',
  },
  {
    name: 'E-commerce',
    time: 'nov. 2023 - feb. 2024',
    technologies: [
      {
        name: 'React',
        icon: '/techSkills/react.svg',
        color: '#61dbfb',
      },
      {
        name: 'Typescript',
        icon: '/techSkills/Typescript.svg',
        color: '#3178c6',
      },
      { name: 'CSS', icon: '/techSkills/css3.svg', color: '#264de4' },
      {
        name: 'express',
        icon: '/techSkills/express.svg',
        color: '#000000',
      },
      {
        name: 'Node.js',
        icon: '/techSkills/nodejs.svg',
        color: '#339933',
      },
      {
        name: 'Mongo',
        icon: '/techSkills/mongodb.svg',
        color: '#47A248',
      },
      {
      name:'Docker',
      icon: '/techSkills/docker.svg',
      color: '#2496ED',
    }
    ],
    description: `Proyecto personal de un E-commmerce construido con el stack MERN, iconos con react-icon, servidor dockerizado, autenticación de Google con passport y manejo de la carga de archivos con multer`,
    images: '/proyects/E-commerce.png',
    buttons: [
      {
        icon: 'arrow',
        text: 'ver',
        url: 'https://e-commerce-sigma-navy.vercel.app',
      },
      {
        icon: 'code',
        text: 'Frontend',
        url: 'https://github.com/Facu-J-Boy/E-commerce',
      },
      {
        icon: 'code',
        text: 'Backend',
        url: 'https://github.com/Facu-J-Boy/E-commerce_API',
      },
    ],
    url: 'https://e-commerce-sigma-navy.vercel.app',
  },
];

export default allProyects;
