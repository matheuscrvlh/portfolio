// ICONS
import typescript from '../assets/icons/typescript.png'
import react from '../assets/icons/react.png'
import next from '../assets/icons/next.png'
import node from '../assets/icons/node.png'
import tailwind from '../assets/icons/tailwind.png'
import javascript from '../assets/icons/javascript.png'
import css from '../assets/icons/css.png'
import html from '../assets/icons/html.png'

import git from '../assets/icons/git.png'
import github2 from '../assets/icons/github2.png'
import photoshop from '../assets/icons/photoshop.png'
import figma from '../assets/icons/figma.png'

// COMPONENTS
import SkillCard from '../components/SkillCard.jsx'

export default function Skills() {
    return (
        <section className='flex flex-col items-center bg-linear-to-l from-(--color-blue-base) to-(--color-blue-dark) h-dvh text-white'>
            <h2 className='text-5xl font-bold mt-10'>
                <span className='text-(--color-blue-light)'>
                    Minhas
                </span>{'  '}
                <span className='
                    bg-linear-to-r 
                    from-(--color-blue-light) 
                    via-(--color-blue-light2) 
                    to-(--color-blue-light)
                    bg-size-[200%_200%]
                    animate-[gradient_5s_ease-in-out_infinite]
                    bg-clip-text text-transparent
                '>
                    Habilidades
                </span>
            </h2>
            <div className='flex-col justify-items-center mb-12 mt-5'>
                <h3 className='text-xl font-normal text-white/80'>Desenvolvimento com foco em performance, experiência do usuário e código escalável.</h3>
                <h3 className='text-xl font-normal text-white/80'>Cada projeto é pensado para transformar ideias em produtos digitais eficientes.</h3>
            </div>
            <p className='text-(--color-blue-light) text-2xl font-bold mb-6'>TECNOLOGIAS</p>
            <div className='grid grid-cols-5 gap-10 mb-15'>
                <SkillCard img={typescript} alt='TypeScript' desc='TypeScript'/>
                <SkillCard img={react} alt='React' desc='React.js'/>
                <SkillCard img={next} alt='Next.js' desc='Next.js'/>
                <SkillCard img={node} alt='Node.js' desc='Node.js'/>
                <SkillCard img={tailwind} alt='Tailwind CSS' desc='Tailwind CSS'/>
                <SkillCard img={javascript} alt='JavaScript' desc='JavaScript'/>
                <SkillCard img={html} alt='HTML5' desc='HTML5'/>
                <SkillCard img={css} alt='CSS3' desc='CSS3'/>
            </div>
            <p className='text-(--color-blue-light) text-2xl font-bold mb-6'>FERRAMENTAS</p>
            <div className='grid grid-cols-5 gap-10 mb-10'>
                <SkillCard img={git} alt='Git' desc='Git' />
                <SkillCard img={github2} alt='GitHub' desc='GitHub' />
                <SkillCard img={photoshop} alt='Photoshop' desc='Photoshop' />
                <SkillCard img={figma} alt='Figma' desc='Figma' />
            </div>
        </section>
    )
}