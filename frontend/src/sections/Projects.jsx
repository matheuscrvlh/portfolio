// DEPENDENCES
import { useState } from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS
import ProjectCard from '../components/ProjectCard'
import ModalProject from '../components/ModalProject'

// PROJECTS
import { projects } from '../data/projects'

export default function Projects() {
    const [ projectModal, setProjectModal ] = useState(null)

    return (
        <section 
            id='projects'
            className='
                flex flex-col items-center bg-blue-dark h-full text-white pt-10 pb-10
                md:w-auto md:pb-15 md:pt-15
            '>
            <div className='
                w-[85vw] text-center
                md:w-auto
            '>
                <h3 className='
                    text-xl font-bold
                    bg-linear-to-r 
                    from-blue-light
                    via-blue-light2
                    to-blue-light
                    bg-size-[200%_200%]
                    animate-[gradient_5s_ease-in-out_infinite]
                    bg-clip-text text-transparent
                '>
                    PORTFÓLIO
                </h3>
                <h2 className='text-blue-light text-4xl font-bold mb-3 md:text-5xl md:mb-6'>Projetos Recentes</h2>
                <h3 className='text-md font-normal text-white/80 mb-10 md:text-xl md:mb-15'>Confira alguns projetos desenvolvidos recentemente por mim.</h3>
            </div>
            <div className='
                flex w-screen overflow-x-auto px-10 pt-2 pb-4 gap-6
                md:grid md:grid-cols-2 md:gap-8 md:w-auto md:overflow-x-hidden md:px-0
                lg:grid-cols-3
                2xl:grid-cols-4
            '>
                {projects.map(project => (
                    project.featured && project.id < 5 && (
                        <ProjectCard 
                            key={project.id}
                            {...project}
                            onClick={() => { 
                                setProjectModal({...project})
                            }}
                        />
                    )
                ))}
            </div>
            <Link 
                to='/projetos'
                className='bg-blue-light2 py-3 px-10 rounded-xl font-semibold mt-8 
                cursor-pointer hover:bg-blue-light2/80 transition
                md:mt-16
                '
            >
                Ver Todos os Projetos
            </Link>
            {projectModal && (
                <ModalProject 
                    onClose={() => {
                        setProjectModal(null)
                    }}
                    {...projectModal}
                />
            )}
        </section>
    )
}