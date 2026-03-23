// DEPENDENCES
import { useState } from 'react'

// COMPONENTS
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import ModalProject from '../components/ModalProject'

// PROJECTS
import { projects } from '../data/projects'

export default function AllProjects() {
    const [ projectModal, setProjectModal ] = useState(null)

    return (
        <main className='h-full'>
            <Navbar className='bg-(--color-blue-dark)'/>
            <section 
                className='flex flex-col items-center bg-(--color-blue-dark) min-h-screen h-full text-white pt-35'
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
                    PORTFÓLIO COMPLETO
                </h3>
                <h2 className='text-(--color-blue-light) text-5xl font-bold mb-6'>Todos os Projetos</h2>
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
            </section>
            <Footer />
        </main>
    )
}