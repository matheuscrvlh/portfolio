// IMAGES PROJETOS
// Legacy
import homeLegacy from '../assets/projetos/legacyveiculos/home.png'
// Cursos Novamix
import homeNovamix from '../assets/projetos/cursosnovamix/home.png'

export const projects = [
    {   
        id: 1,
        type: 'SISTEMA',
        img: homeLegacy,
        title: 'Loja de Veículos',
        desc: 'Sistema completo de catálogo. Cadastro de veículos, recebimento de propostas de clientes e painel administrativo para gestão.',
        descCompleta: 'Sistema desenvolvido para gestão geral da loja. Contém CRUD de veículos com catalogo e filtro, formulário de proposta de clientes, integração com redes sociais, aba sobre a loja e gestão geral de todas informações em painel administrativo.',
        link: 'https://legacyveiculos.com/',
        techs: ['JavaScript', 'Node.js']
    },
    {
        id: 2,
        type: 'SISTEMA',
        img: homeNovamix,
        title: 'Inscrições em Cursos',
        desc: 'Sistema completo de catálogo e inscrições em cursos. Gestão em painel administrativo.',
        descCompleta: '',
        link: 'https://cursos.lojanovamix.com.br/',
        techs: ['React.js', 'TailwindCSS', 'Node.js']
    },
    {
        id: 3,
        type: 'SISTEMA',
        img: homeNovamix,
        title: 'Inscrições em Cursos',
        desc: 'Sistema completo de catálogo e inscrições em cursos. Gestão em painel administrativo.',
        descCompleta: '',
        link: 'https://cursos.lojanovamix.com.br/',
        techs: ['React', 'Node']
    },
]