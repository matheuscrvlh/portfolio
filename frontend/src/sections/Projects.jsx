// DEPENDENCES
import { useState, useEffect } from 'react'

// COMPONENTS
import ProjectCard from '../components/ProjectCard'
import ModalProject from '../components/ModalProject'

// IMAGES PROJETOS
// Legacy
import homeLegacy from '../assets/projetos/legacyveiculos/home.png'

// Cursos Novamix
import homeNovamix from '../assets/projetos/cursosnovamix/home.png'
export default function Projects() {
    const [ showModal, setShowModal ] = useState(false)

    useEffect(() => {
        console.log(showModal)
    }, [showModal])

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
                <ProjectCard 
                    type='SISTEMA'
                    img={homeLegacy}
                    title='Loja de Veículos' 
                    desc='Sistema completo de catálogo. Cadastro de veículos, recebimento de propostas de clientes e painel administrativo para gestão.' 
                    link='https://legacyveiculos.com/'
                    onclick={() => setShowModal(!showModal)}
                />
                <ProjectCard 
                    type='SISTEMA'
                    img={homeNovamix} 
                    title='Inscrições em Cursos' 
                    desc='Sistema completo de catálogo e inscrições em cursos. Gestão em painel administrativo.' 
                    link='https://cursos.lojanovamix.com.br/'
                    onclick={() => setShowModal(!showModal)}
                />
            </div>
            {showModal
                ? <ModalProject /> 
                : ''
            }
        </section>
    )
}