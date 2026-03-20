// DEPENDENCES
import { useState, useEffect } from 'react'

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
            className='flex flex-col items-center bg-(--color-blue-dark) h-full text-white pt-15 pb-15'
        >
            <h3 className='
                text-xl font-bold
                bg-linear-to-r 
                from-(--color-blue-light) 
                via-(--color-blue-light2) 
                to-(--color-blue-light)
                bg-size-[200%_200%]
                animate-[gradient_5s_ease-in-out_infinite]
                bg-clip-text text-transparent
            '>
                PORTFÓLIO
            </h3>
            <h2 className='text-(--color-blue-light) text-5xl font-bold mb-6'>Projetos Recentes</h2>
            <h3 className='text-xl font-normal text-white/80 mb-15'>Confira alguns projetos desenvolvidos recentemente por mim.</h3>
            <div className='grid grid-cols-4 gap-8'>
                {projects.map(project => (
                    project.featured && (
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
            {projectModal && (
                <ModalProject 
                    onClose={() => {
                        setProjectModal(null)
                    }}
                    {...projectModal}
                />
            )}
            <button>
                Ver Todos os Projetos
            </button>
        </section>
    )
}