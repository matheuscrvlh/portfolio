import { useState } from 'react'
import { Link } from 'react-router-dom'

import ProjectCard from '../components/ProjectCard'
import ModalProject from '../components/ModalProject'
import FadeIn, { FadeInStagger, FadeInItem } from '../components/FadeIn'
import { projects } from '../data/projects'

const featured = projects.filter(p => p.featured).slice(0, 3)

// Techs que aparecem em 2+ projetos, ordenadas por frequência
const techCounts = {}
featured.forEach(p => p.techs.forEach(t => { techCounts[t] = (techCounts[t] || 0) + 1 }))
const topTechs = Object.entries(techCounts)
    .filter(([, count]) => count >= 2)
    .sort(([, a], [, b]) => b - a)
    .map(([tech]) => tech)
const filterOptions = ['Todos', ...topTechs]

export default function Projects() {
    const [projectModal, setProjectModal] = useState(null)
    const [filter, setFilter] = useState('Todos')

    const filtered = filter === 'Todos'
        ? featured
        : featured.filter(p => p.techs.includes(filter))

    return (
        <section
            id='projects'
            className='flex flex-col items-center bg-blue-dark h-full text-white pt-12 pb-12 md:pb-20 md:pt-20'
        >
            {/* Header */}
            <FadeIn className='w-[85vw] text-center md:w-auto mb-8'>
                <p className='text-sm font-bold text-gradient tracking-widest mb-3'>PORTFÓLIO</p>
                <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl mb-3'>
                    <span className='text-blue-light'>Projetos </span>
                    <span className='text-gradient'>Recentes</span>
                </h2>
                <p className='text-white/60 md:text-lg'>
                    + de {projects.length} projetos entregues.
                </p>
            </FadeIn>

            {/* Filtro por stack */}
            <FadeIn delay={0.1} className='flex flex-wrap justify-center gap-2 mb-10 px-4'>
                {filterOptions.map(opt => (
                    <button
                        key={opt}
                        onClick={() => setFilter(opt)}
                        className={`
                            px-4 py-1.5 rounded-full text-sm font-semibold
                            transition-all duration-200 cursor-pointer border
                            ${filter === opt
                                ? 'bg-blue-light2 border-blue-light2 text-white shadow-[0_0_12px_rgba(130,24,216,0.5)]'
                                : 'border-blue-light2/20 text-white/55 hover:border-blue-light2/50 hover:text-white/90 bg-transparent'
                            }
                        `}
                    >
                        {opt}
                        {opt !== 'Todos' && (
                            <span className={`ml-1 text-xs ${filter === opt ? 'text-white/65' : 'text-white/25'}`}>
                                {featured.filter(p => p.techs.includes(opt)).length}
                            </span>
                        )}
                    </button>
                ))}
            </FadeIn>

            {/* Cards — scroll no mobile, flex-wrap centralizado no desktop */}
            <div className='w-full overflow-x-auto md:overflow-visible'>
                <FadeInStagger
                    key={filter}
                    stagger={0.1}
                    className='
                        flex w-max px-6 pb-4 pt-1 gap-5
                        md:flex-wrap md:justify-center md:w-full md:gap-6 md:px-8 md:pb-6
                    '
                >
                    {filtered.map(project => (
                        <FadeInItem key={project.id} className='flex flex-col'>
                            <ProjectCard
                                {...project}
                                onClick={() => setProjectModal({...project})}
                            />
                        </FadeInItem>
                    ))}
                </FadeInStagger>
            </div>

            {filtered.length === 0 && (
                <p className='text-white/35 mt-4 text-sm'>Nenhum projeto com essa tecnologia ainda.</p>
            )}

            <Link
                to='/projetos'
                className='
                    mt-12 py-3 px-10 rounded-xl font-semibold text-sm
                    border border-blue-light2/35 text-white/75
                    hover:bg-blue-light2/12 hover:border-blue-light2/65 hover:text-white
                    transition-all duration-200
                '
            >
                Ver Todos os Projetos →
            </Link>

            {projectModal && (
                <ModalProject
                    onClose={() => setProjectModal(null)}
                    {...projectModal}
                />
            )}
        </section>
    )
}
