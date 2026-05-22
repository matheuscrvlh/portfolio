// IMAGES PROJETOS
// Legacy
import homeLegacy from '../assets/projetos/legacyveiculos/home.png'
// Cursos Novamix
import homeCursosNovamix from '../assets/projetos/cursosnovamix/home.png'
// Avaliacoes Novamix
import homeAvaliacoesNovamix from '../assets/projetos/avaliacoesnovamix/home.png'

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

        img: homeCursosNovamix,
        images: [homeCursosNovamix],

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
        featured: true,
        year: 2026,

        img: homeAvaliacoesNovamix,
        images: [homeAvaliacoesNovamix],

        title: 'Sistema de Avaliações',

        desc: 'Sistema completo de avaliações com dashboard administrativo e acompanhamento de feedbacks em tempo real.',

        descCompleta: 'Sistema desenvolvido para coleta e gerenciamento de avaliações de clientes da NovaMix Food Service. Possui área pública para envio de avaliações, autenticação JWT, painel administrativo completo, filtros avançados, exportação CSV, integração com avaliações do Google e responsividade total para desktop e mobile.',

        features: [
            'Área pública de avaliações',
            'Dashboard administrativo',
            'Autenticação JWT',
            'Filtros avançados',
            'Exportação CSV',
            'Dark Mode',
            'Integração com Google Reviews',
            'Responsividade Mobile/Desktop'
        ],

        challenges: [
            'Estruturação escalável de avaliações',
            'Integração frontend/backend',
            'Controle de autenticação segura',
            'Performance em listagens e filtros'
        ],

        linkProject: 'https://avaliacoes.lojanovamix.com.br/?loja=1',
        linkGithub: 'https://github.com/matheuscrvlh/avaliacoes-novamix',

        techs: [
            'React.js',
            'TypeScript',
            'TailwindCSS',
            'Node.js',
            'Express',
            'SQLite',
            'Docker',
            'JWT'
        ]
    },
    
]