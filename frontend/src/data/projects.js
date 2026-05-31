// ─── PROJETO 1 — Loja de Veículos ───────────────────────────────────────────
import p1_1 from '../assets/projetos/legacyveiculos/1.png'
import p1_2 from '../assets/projetos/legacyveiculos/2.png'
import p1_3 from '../assets/projetos/legacyveiculos/3.png'

// ─── PROJETO 2 — Catálogo de Cursos ─────────────────────────────────────────
import p2_1 from '../assets/projetos/cursosnovamix/1.png'
import p2_2 from '../assets/projetos/cursosnovamix/2.png'
import p2_3 from '../assets/projetos/cursosnovamix/3.png'
import p2_4 from '../assets/projetos/cursosnovamix/4.png'

// ─── PROJETO 3 — Sistema de Avaliações ──────────────────────────────────────
import p3_1 from '../assets/projetos/avaliacoesnovamix/1.png'
import p3_2 from '../assets/projetos/avaliacoesnovamix/2.png'
import p3_3 from '../assets/projetos/avaliacoesnovamix/3.png'

// ─── PROJETO 4 — Lamata Horto ────────────────────────────────────────────────
import p4_1 from '../assets/projetos/lamatahorto/1.png'
import p4_2 from '../assets/projetos/lamatahorto/2.png'
import p4_3 from '../assets/projetos/lamatahorto/3.png'
import p4_4 from '../assets/projetos/lamatahorto/4.png'

// ─── PROJETO 5 — Portfólio Ian Mello ────────────────────────────────────────────────
import p5_1 from '../assets/projetos/portfolioianmello/1.png'
import p5_2 from '../assets/projetos/portfolioianmello/2.png'
import p5_3 from '../assets/projetos/portfolioianmello/3.png'


export const projects = [
    {
        id: 1,
        type: 'Fullstack',
        status: 'Em produção',
        featured: true,
        year: 'Maio de 2025',

        img: p1_1,
        images: [p1_1, p1_2, p1_3],

        title: 'Loja de Veículos',

        desc: 'Plataforma completa de catálogo de veículos com cadastro, filtros avançados, envio de propostas e painel administrativo.',
        descCompleta: 'Plataforma completa para gestão e exposição de veículos à venda. Permite o cadastro de veículos com fotos e especificações, filtragem avançada por modelo, ano e faixa de preço, envio de propostas de compra por parte dos clientes, e um painel administrativo protegido para gerenciar o estoque e acompanhar as propostas recebidas.',

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

        img: p2_1,
        images: [p2_1, p2_2, p2_3, p2_4],

        title: 'Catálogo de Cursos',

        desc: 'Plataforma de catálogo de cursos com inscrições online, filtros avançados e painel administrativo completo.',
        descCompleta: 'Plataforma completa para catálogo de cursos e gestão de inscrições. Permite que clientes visualizem os cursos disponíveis com filtros avançados e realizem inscrições diretamente pelo site. O painel administrativo oferece CRUD completo de cursos, culinaristas e inscrições, com controle total sobre o conteúdo exibido.',

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

        techs: ['React.js', 'TailwindCSS', 'Node.js', 'Docker']
    },
    {
        id: 3,
        type: 'Fullstack',
        status: 'Em produção',
        featured: true,
        year: 'Maio de 2026',

        img: p3_1,
        images: [p3_1, p3_2, p3_3],

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
    {
        id: 4,
        type: 'FrontEnd',
        status: 'Em produção',
        featured: true,
        year: 'Maio de 2026',

        img: p4_1,
        images: [p4_1, p4_2, p4_3, p4_4],

        title: 'Lamata Horto',

        desc: 'Site institucional com catálogo de produtos, filtros, carrossel de imagens e páginas de sobre e contato.',
        descCompleta: 'Site institucional desenvolvido para a Lamata Horto, com foco em apresentação de produtos e experiência de navegação fluida. Conta com página inicial completa, catálogo com filtros por categoria, página individual de produto, carrossel de imagens, seção sobre a loja e informações de contato. Estruturado para receber integração com backend futuramente.',

        features: [
            'Home completo',
            'Página de catálogo com filtros',
            'Página do produto',
            'Sobre a loja',
            'Carrossel de imagens',
        ],

        challenges: [
            'Estruturação escalável para receber Backend',
            'Otimização em performance',
        ],

        linkProject: 'https://www.lamatahorto.com.br',
        linkGithub: 'https://github.com/matheuscrvlh/lamata-horto',

        techs: [
            'React.js',
            'TypeScript',
            'TailwindCSS'
        ]
    },
    {
        id: 5,
        type: 'FrontEnd',
        status: 'Em produção',
        featured: true,
        year: 'Maio de 2026',

        img: p4_1,
        images: [p5_1, p5_2, p5_3],

        title: 'Portfólio Ian Mello',

        desc: 'Portfólio pessoal com foco em UI/UX, performance, HTML semântico e design responsivo para todas as telas.',
        descCompleta: 'Portfólio pessoal desenvolvido para Ian Mello com ênfase em UI/UX, performance e acessibilidade. Conta com HTML semântico, otimização de SEO, animações fluidas e design totalmente responsivo para desktop e mobile. Construído com React.js, TypeScript e TailwindCSS.',

        features: [
            'Home completo',
            'HTML Semântico',
            'Otimização para performance',
            'UI UX',
            'Responsividade',
        ],

        challenges: [
            'Responsividade para todas telas',
            'Otimização em performance',
        ],

        linkProject: 'https://portfolio-ian-mello.vercel.app/',
        linkGithub: 'https://github.com/matheuscrvlh/portfolio-ian-mello',

        techs: [
            'React.js',
            'TypeScript',
            'TailwindCSS'
        ]
    },
]
