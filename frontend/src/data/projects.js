// ─── PROJETO 1 — Loja de Veículos ───────────────────────────────────────────
import p1_1 from '../assets/projetos/legacyveiculos/1.png'
import p1_2 from '../assets/projetos/legacyveiculos/2.png'
import p1_3 from '../assets/projetos/legacyveiculos/3.png'
import p1_4 from '../assets/projetos/legacyveiculos/4.png'
import p1_5 from '../assets/projetos/legacyveiculos/5.png'
import p1_6 from '../assets/projetos/legacyveiculos/6.png'

// ─── PROJETO 2 — Catálogo de Cursos ─────────────────────────────────────────
import p2_1 from '../assets/projetos/cursosnovamix/1.png'
import p2_2 from '../assets/projetos/cursosnovamix/2.png'
import p2_3 from '../assets/projetos/cursosnovamix/3.png'
import p2_4 from '../assets/projetos/cursosnovamix/4.png'
import p2_5 from '../assets/projetos/cursosnovamix/5.png'
import p2_6 from '../assets/projetos/cursosnovamix/6.png'
import p2_7 from '../assets/projetos/cursosnovamix/7.png'
import p2_8 from '../assets/projetos/cursosnovamix/8.png'

// ─── PROJETO 3 — Sistema de Avaliações ──────────────────────────────────────
import p3_1 from '../assets/projetos/avaliacoesnovamix/1.png'
import p3_2 from '../assets/projetos/avaliacoesnovamix/2.png'
import p3_3 from '../assets/projetos/avaliacoesnovamix/3.png'
import p3_4 from '../assets/projetos/avaliacoesnovamix/4.png'
import p3_5 from '../assets/projetos/avaliacoesnovamix/5.png'

// ─── PROJETO 4 — Lamata Horto ────────────────────────────────────────────────
import p4_1 from '../assets/projetos/lamatahorto/1.png'
import p4_2 from '../assets/projetos/lamatahorto/2.png'
import p4_3 from '../assets/projetos/lamatahorto/3.png'
import p4_4 from '../assets/projetos/lamatahorto/4.png'

// ─── PROJETO 5 — Portfólio Ian Mello ────────────────────────────────────────────────
import p5_1 from '../assets/projetos/portfolioianmello/1.png'
import p5_2 from '../assets/projetos/portfolioianmello/2.png'
import p5_3 from '../assets/projetos/portfolioianmello/3.png'

// ─── PROJETO 6 — Hub de Sistemas ────────────────────────────────────────────
import p6_1 from '../assets/projetos/hubsistemas/1.png'
import p6_2 from '../assets/projetos/hubsistemas/2.png'
import p6_3 from '../assets/projetos/hubsistemas/3.png'
import p6_4 from '../assets/projetos/hubsistemas/4.png'
import p6_5 from '../assets/projetos/hubsistemas/5.png'
import p6_6 from '../assets/projetos/hubsistemas/6.png'

// ─── PROJETO 7 — Expedição Ecommerce ────────────────────────────────────────
import p7_1 from '../assets/projetos/expedicaoecommerce/1.png'
import p7_2 from '../assets/projetos/expedicaoecommerce/2.png'
import p7_3 from '../assets/projetos/expedicaoecommerce/3.jpeg'
import p7_4 from '../assets/projetos/expedicaoecommerce/4.png'


export const projects = [
    {
        id: 1,
        type: 'Fullstack',
        status: 'Em produção',
        featured: true,
        year: 'Maio de 2025',

        img: p1_1,
        images: [p1_1, p1_2, p1_3, p1_4, p1_5, p1_6],

        title: 'Loja de Veículos',

        desc: 'Plataforma completa de loja de veículos com catálogo, filtros avançados, galeria de fotos, consignação e painel administrativo.',
        descCompleta: 'Plataforma completa para gestão e exposição de veículos à venda. Conta com vitrine pública de destaques, estoque com filtros avançados, página de detalhes com galeria de fotos, seção de veículos vendidos, formulário de consignação e integração com WhatsApp e Instagram. O painel administrativo, protegido por autenticação JWT, permite o cadastro de veículos com upload de imagens, gestão de clientes, usuários e informações da loja.',

        features: [
            'Vitrine com destaques',
            'Estoque com filtros avançados',
            'Galeria de fotos por veículo',
            'Veículos vendidos',
            'Formulário de consignação',
            'Upload de imagens',
            'Autenticação JWT',
            'Painel administrativo (veículos, clientes e usuários)'
        ],

        challenges: [
            'Integração frontend/backend',
            'Upload e organização de imagens em escala',
            'Organização de dados escalável'
        ],

        linkProject: 'https://legacyveiculos.com/',
        linkGithub: 'https://github.com/matheuscrvlh/legacy-veiculos',

        techs: ['React.js', 'TypeScript', 'TailwindCSS', 'Node.js', 'Express', 'SQLite', 'Docker', 'JWT']
    },
    {
        id: 2,
        type: 'Fullstack',
        status: 'Em produção',
        featured: true,
        year: 'Março de 2026',

        img: p2_1,
        images: [p2_1, p2_2, p2_3, p2_4, p2_5, p2_6, p2_7, p2_8],

        title: 'Sistema de Cursos',

        desc: 'Plataforma de catálogo de cursos com inscrição online, seleção de vagas, pagamento via Mercado Pago e painel administrativo completo.',
        descCompleta: 'Plataforma completa para catálogo e gestão de cursos, dividida em categorias como cursos regulares, infantis, culinaristas e indústrias. O cliente pode filtrar os cursos disponíveis e realizar a inscrição diretamente pelo site, com seleção de vagas e pagamento integrado via Mercado Pago. O painel administrativo permite o CRUD completo de cursos, culinaristas, indústrias e banners de marketing, além do acompanhamento e gestão das inscrições recebidas.',

        features: [
            'Catálogo por categorias (cursos, infantil, culinaristas, indústrias)',
            'Filtro avançado',
            'Inscrição com seleção de vagas',
            'Pagamento integrado (Mercado Pago)',
            'Gestão de banners e marketing',
            'Painel administrativo completo'
        ],

        challenges: [
            'Integração com gateway de pagamento (Mercado Pago)',
            'Controle de vagas e concorrência nas inscrições',
            'Organização de dados escalável'
        ],

        linkProject: 'https://cursos.lojanovamix.com.br/',
        linkGithub: 'https://github.com/matheuscrvlh/cursos-novamix',

        techs: ['React.js', 'TailwindCSS', 'Node.js', 'Express', 'PostgreSQL', 'Mercado Pago', 'Docker', 'JWT']
    },
    {
        id: 6,
        type: 'Fullstack',
        status: 'Em produção',
        featured: true,
        year: 'Agosto de 2026',

        img: p6_1,
        images: [p6_1, p6_2, p6_3, p6_4, p6_5, p6_6],

        title: 'Hub de Sistemas',

        desc: 'Plataforma centralizada para gestão de sistemas, módulos, filiais e usuários, com autenticação segura e controle de acesso por permissões.',
        descCompleta: 'Hub administrativo desenvolvido para centralizar o acesso e a gestão dos sistemas internos da NovaMix. Permite o cadastro e controle de sistemas, módulos e filiais, além de uma gestão completa de usuários com controle de acesso baseado em permissões (RBAC). Conta com autenticação via JWT, rotas protegidas para áreas administrativas e uma arquitetura modular pensada para escalar conforme novos sistemas sejam integrados ao hub.',

        features: [
            'Autenticação JWT',
            'Controle de acesso por permissões (RBAC)',
            'Gestão de usuários',
            'Cadastro de sistemas e módulos',
            'Gestão de filiais',
            'Rotas protegidas (admin e usuário)',
        ],

        challenges: [
            'Estruturação de controle de acesso por papéis',
            'Arquitetura modular e escalável',
            'Segurança na autenticação e nas rotas administrativas',
        ],

        linkProject: 'https://hub.lojanovamix.com.br',
        linkGithub: 'https://github.com/matheuscrvlh/hub-novamix',

        techs: [
            'React.js',
            'TypeScript',
            'TailwindCSS',
            'Fastify',
            'PostgreSQL',
            'Docker',
            'JWT'
        ]
    },
    {
        id: 3,
        type: 'Fullstack',
        status: 'Em produção',
        featured: true,
        year: 'Maio de 2026',

        img: p3_1,
        images: [p3_1, p3_2, p3_3, p3_4, p3_5],

        title: 'Sistema de Avaliações',

        desc: 'Sistema completo de avaliações multi-loja com página de televendas, dashboard administrativo e acompanhamento de feedbacks em tempo real.',
        descCompleta: 'Sistema desenvolvido para coleta e gerenciamento de avaliações de clientes da NovaMix Food Service. Possui área pública para envio de avaliações com identificação automática da loja pela URL, página dedicada para avaliações do time de televendas, autenticação JWT, painel administrativo completo com filtros avançados, ordenação, exportação CSV, seleção múltipla e dark mode, além de cards de desempenho por loja e responsividade total para desktop e mobile.',

        features: [
            'Área pública de avaliações',
            'Página de avaliações de Televendas',
            'Seleção e identificação de loja',
            'Dashboard administrativo com cards por loja',
            'Autenticação JWT',
            'Filtros avançados e ordenação',
            'Exportação CSV',
            'Dark Mode',
            'Responsividade Mobile/Desktop'
        ],

        challenges: [
            'Estruturação escalável multi-loja',
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
            'PostgreSQL',
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
    {
        id: 7,
        type: 'Fullstack',
        status: 'Em produção',
        featured: true,
        year: 'Julho de 2026',

        img: p7_1,
        images: [p7_1, p7_2, p7_3, p7_4],

        title: 'Expedição Ecommerce',

        desc: 'Painel operacional de expedição com leitura de código de barras, crachá de operadores, acompanhamento de pedidos em tempo real e sincronização com o CISS.',
        descCompleta: 'Sistema interno desenvolvido para gerenciar a expedição de pedidos da NovaMix. Conta com dashboard de produção com estatísticas e ranking de operadores, tela de coleta via leitura de código de barras e crachá (QR Code), gestão e atribuição de pedidos, notificações em tempo real via SSE e sincronização de pedidos com o CISS, o sistema de gestão utilizado pela empresa.',

        features: [
            'Dashboard de produção com estatísticas e ranking',
            'Leitura de código de barras',
            'Crachá com QR Code para operadores',
            'Gestão e atribuição de pedidos',
            'Notificações em tempo real (SSE)',
            'Sincronização de pedidos com o CISS',
            'Dark/Light Mode',
        ],

        challenges: [
            'Integração e sincronização com o CISS',
            'Atualizações em tempo real via SSE',
            'Fluxo de coleta por leitura de código de barras',
        ],

        linkProject: null,
        linkGithub: 'https://github.com/matheuscrvlh/ecommerce-novamix',

        techs: [
            'React.js',
            'TypeScript',
            'TailwindCSS',
            'Fastify',
            'PostgreSQL',
            'Docker',
            'JWT'
        ]
    }
]
