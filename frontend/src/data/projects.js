// IMAGES PROJETOS
// Legacy
import homeLegacy from '../assets/projetos/legacyveiculos/home.png'
// Cursos Novamix
import homeNovamix from '../assets/projetos/cursosnovamix/home.png'

export const projects = [
    {
        id: 1,
        type: 'Fullstack',
        status: 'Em produção',
        featured: true,
        year: 'Maio de 2025',

        img: homeLegacy,
        images: [homeLegacy],

        title: 'Loja de Veículos',

        desc: 'Sistema completo de catálogo. Cadastro de veículos, recebimento de propostas de clientes e painel administrativo para gestão.',
        descCompleta: 'Sistema completo de catálogo. Cadastro de veículos, recebimento de propostas de clientes e painel administrativo para gestão.',

        features: [
            'CRUD de veículos',
            'Filtro avançado',
            'Envio de propostas',
            'Painel administrativo'
        ],

        challenges: [
            'Integração frontend/backend',
            'Organização de dados escalável'
        ],

        linkProject: 'https://legacyveiculos.com/',
        linkGithub: null,

        techs: ['JavaScript', 'Node.js']
    },
    {
        id: 2,
        type: 'Fullstack',
        status: 'Em produção',
        featured: true,
        year: 'Março de 2026',

        img: homeNovamix,
        images: [homeNovamix],

        title: 'Catálogo de Cursos',

        desc: 'Sistema completo de catálogo e inscrições em cursos. Gestão em painel administrativo.',
        descCompleta: 'Sistema completo de catálogo e inscrições em cursos. Gestão em painel administrativo.',

        features: [
            'CRUD de cursos, culinaristas e inscrições',
            'Filtro avançado',
            'Envio de inscrições',
            'Painel administrativo'
        ],

        challenges: [
            'Integração frontend/backend',
            'Organização de dados escalável'
        ],

        linkProject: 'https://cursos.lojanovamix.com.br/',
        linkGithub: 'https://github.com/matheuscrvlh/cursos-novamix',

        techs: ['React.js', 'TailwindCSS', 'Node.js']
    },
    {
        id: 3,
        type: 'Fullstack',
        status: 'Em produção',
        featured: false,
        year: 2026,

        img: homeNovamix,
        images: [homeNovamix],

        title: 'Catálogo de Cursos',

        desc: 'Sistema completo de catálogo e inscrições em cursos. Gestão em painel administrativo.',
        descCompleta: 'Sistema com objetivo em catálogo de cursos com inscrições. Contém CRUD de cursos, cadastros, inscrições, culinaristas e demais usando React.js, TailwindCSS e Node.js. Gestão das informações feita em painel administrativo completo.',

        features: [
            'CRUD de cursos, culinaristas e inscrições',
            'Filtro avançado',
            'Envio de inscrições',
            'Painel administrativo'
        ],

        challenges: [
            'Integração frontend/backend',
            'Organização de dados escalável'
        ],

        linkProject: 'https://cursos.lojanovamix.com.br/',
        linkGithub: 'https://github.com/matheuscrvlh/cursos-novamix',

        techs: ['React.js', 'TailwindCSS', 'Node.js']
    },
]