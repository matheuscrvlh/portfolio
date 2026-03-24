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
            className='flex flex-col items-center bg-blue-dark h-full text-white pt-15 pb-15'
        >
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
            <h2 className='text-blue-light text-5xl font-bold mb-6'>Projetos Recentes</h2>
            <h3 className='text-xl font-normal text-white/80 mb-15'>Confira alguns projetos desenvolvidos recentemente por mim.</h3>
            <div className='grid grid-cols-4 gap-8'>
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
            {projectModal && (
                <ModalProject 
                    onClose={() => {
                        setProjectModal(null)
                    }}
                    {...projectModal}
                />
            )}
                <Link 
                    to='/projetos'
                    className='bg-blue-light2 py-3 px-10 rounded-xl font-semibold mt-16 
                    cursor-pointer hover:bg-blue-light2/80 transition'
                >
                    Ver Todos os Projetos
                </Link>
        </section>
    )
}