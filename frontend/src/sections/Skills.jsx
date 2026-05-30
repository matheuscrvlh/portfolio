// ICONS
import typescript from '../assets/icons/typescript.png'
import react from '../assets/icons/react.png'
import next from '../assets/icons/next.png'
import node from '../assets/icons/node.png'
import tailwind from '../assets/icons/tailwind.png'
import postgresdb from '../assets/icons/postgresdb.png'
import mongodb from '../assets/icons/mongodb.png'
import sqlite from '../assets/icons/sqlite.png'
import javascript from '../assets/icons/javascript.png'
import css from '../assets/icons/css.png'
import html from '../assets/icons/html.png'

import docker from '../assets/icons/docker.png'
import nginx from '../assets/icons/nginx.png'
import git from '../assets/icons/git.png'
import github2 from '../assets/icons/github2.png'
import photoshop from '../assets/icons/photoshop.png'
import figma from '../assets/icons/figma.png'

// COMPONENTS
import SkillCard from '../components/SkillCard.jsx'
import FadeIn, { FadeInStagger, FadeInItem } from '../components/FadeIn'

export default function Skills() {
    return (
        <section className='
            flex flex-col h-full items-center text-center bg-linear-to-l from-blue-base to-blue-dark text-white pt-15 pb-5
            md:pb-15
        '>
            <FadeIn>
            <p className='text-sm font-bold text-gradient tracking-widest mb-3'>HABILIDADES</p>
            <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl'>
                <span className='text-blue-light'>Minhas </span>
                <span className='text-gradient'>Habilidades</span>
            </h2>
            </FadeIn>

            <FadeIn delay={0.1}><p className='text-blue-light text-xl font-bold mb-6 md:text-2xl mt-15'>TECNOLOGIAS</p></FadeIn>
            <FadeInStagger stagger={0.05} className='
                flex overflow-x-auto gap-3 mb-15 w-[90vw] mx-auto pb-3 scrollbar-hide
                md:grid md:grid-cols-5 md:overflow-visible md:gap-10 md:w-auto md:py-1
            '>
                <FadeInItem className='shrink-0'><SkillCard img={typescript} alt='TypeScript' desc='TypeScript'/></FadeInItem>
                <FadeInItem className='shrink-0'><SkillCard img={react} alt='React' desc='React.js'/></FadeInItem>
                <FadeInItem className='shrink-0'><SkillCard img={next} alt='Next.js' desc='Next.js'/></FadeInItem>
                <FadeInItem className='shrink-0'><SkillCard img={node} alt='Node.js' desc='Node.js'/></FadeInItem>
                <FadeInItem className='shrink-0'><SkillCard img={tailwind} alt='Tailwind CSS' desc='Tailwind CSS'/></FadeInItem>
                <FadeInItem className='shrink-0'><SkillCard img={postgresdb} alt='PostgresDB' desc='Postgres'/></FadeInItem>
                <FadeInItem className='shrink-0'><SkillCard img={mongodb} alt='MongoDB' desc='MongoDB'/></FadeInItem>
                <FadeInItem className='shrink-0'><SkillCard img={sqlite} alt='SQLite' desc='SQLite'/></FadeInItem>
                <FadeInItem className='shrink-0'><SkillCard img={javascript} alt='JavaScript' desc='JavaScript'/></FadeInItem>
                <FadeInItem className='shrink-0'><SkillCard img={html} alt='HTML5' desc='HTML5'/></FadeInItem>
                <FadeInItem className='shrink-0'><SkillCard img={css} alt='CSS3' desc='CSS3'/></FadeInItem>
            </FadeInStagger>

            <FadeIn delay={0.1}><p className='text-blue-light text-xl font-bold mb-6 md:text-2xl'>FERRAMENTAS</p></FadeIn>
            <FadeInStagger stagger={0.05} className='
                flex overflow-x-auto gap-3 mb-10 w-[90vw] mx-auto pb-3 scrollbar-hide
                md:grid md:grid-cols-5 md:overflow-visible md:gap-10 md:w-auto md:py-1
            '>
                <FadeInItem className='shrink-0'><SkillCard img={docker} alt='Docker' desc='Docker' /></FadeInItem>
                <FadeInItem className='shrink-0'><SkillCard img={nginx} alt='Nginx' desc='Nginx' /></FadeInItem>
                <FadeInItem className='shrink-0'><SkillCard img={git} alt='Git' desc='Git' /></FadeInItem>
                <FadeInItem className='shrink-0'><SkillCard img={github2} alt='GitHub' desc='GitHub' /></FadeInItem>
                <FadeInItem className='shrink-0'><SkillCard img={photoshop} alt='Photoshop' desc='Photoshop' /></FadeInItem>
                <FadeInItem className='shrink-0'><SkillCard img={figma} alt='Figma' desc='Figma' /></FadeInItem>
            </FadeInStagger>
        </section>
    )
}