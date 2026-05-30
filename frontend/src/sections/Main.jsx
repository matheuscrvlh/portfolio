import { motion } from 'framer-motion'

// IMAGES
import principal from "../assets/images/principal.png"

// ICONS
import instagram from "../assets/icons/instagram.png"
import whatsapp from "../assets/icons/whatsapp.png"
import github from "../assets/icons/github.png"
import linkedin from "../assets/icons/linkedin.png"

export default function Main() {
    return (
        <section
            id='home'
            className='
                relative overflow-hidden
                flex flex-col gap-15 w-full h-full
                justify-between items-center text-white px-[10vw] pt-30 pb-12
                lg:flex lg:flex-row lg:gap-0 lg:mt-0 lg:h-dvh lg:pt-0 lg:pb-0
            '
            style={{ background: 'radial-gradient(ellipse at 60% 40%, #1a0a30 0%, #0E0615 70%)' }}
        >
            {/* Luz única vindo de cima */}
            <div
                className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none'
                style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(130,24,216,0.13) 0%, transparent 100%)' }}
            />

            {/* Texto */}
            <motion.div
                className='relative z-10 flex flex-col gap-8 mt-auto mb-auto w-[85dvw] 2xl:w-auto'
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
                {/* Role — chip pequeno */}
                <div className='flex items-center gap-2 w-fit'>
                    <span className='w-2 h-2 rounded-full bg-blue-light2 animate-pulse shrink-0'/>
                    <span className='text-sm text-white/55 font-medium tracking-wide'>Desenvolvedor Full-Stack</span>
                </div>

                {/* Saudação + headline */}
                <div className='flex flex-col gap-3'>
                    <h2 className='text-2xl font-semibold text-white/80 md:text-3xl'>
                        Olá, sou Matheus
                    </h2>
                    <h1 className='text-4xl font-bold leading-tight sm:text-5xl md:text-6xl'>
                        <span className='text-blue-light'>Crio a presença digital </span>
                        <span className='text-gradient'>que o seu negócio merece.</span>
                    </h1>
                </div>

                {/* Subtítulo */}
                <p className='text-white/50 text-base leading-relaxed max-w-md md:text-lg'>
                    Sites rápidos, profissionais e desenvolvidos sob medida para destacar sua empresa na internet. Cuidamos de cada etapa para que sua marca seja lembrada desde a primeira visita.
                </p>

                {/* CTA + redes */}
                <div className='flex items-center gap-4 flex-wrap'>
                    <a
                        href='https://wa.me/5522988114263'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='
                            bg-blue-light2 text-white
                            px-6 py-2.5 rounded-full whitespace-nowrap font-semibold
                            hover:bg-blue-light2/80
                            transition-all duration-200
                        '>
                        Solicitar Orçamento
                    </a>
                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className='
                            border border-white/20 text-white/70
                            px-6 py-2.5 rounded-full cursor-pointer whitespace-nowrap
                            hover:border-white/40 hover:text-white
                            transition-all duration-200
                        '>
                        Projetos Entregues
                    </button>
                    <div className='w-px h-6 bg-white/15 hidden sm:block'/>
                    <div className='hidden sm:flex items-center gap-4'>
                        <a href="https://www.instagram.com/mthcode/" target='_blank' rel="noopener noreferrer" className='hover:scale-110 transition'>
                            <img src={instagram} alt="instagram" className='w-7 md:w-8'/>
                        </a>
                        <a href="https://wa.me/5522988114263" target='_blank' rel="noopener noreferrer" className='hover:scale-110 transition'>
                            <img src={whatsapp} alt="whatsapp" className='w-7 md:w-8'/>
                        </a>
                        <a href="https://github.com/matheuscrvlh" target='_blank' rel="noopener noreferrer" className='hover:scale-110 transition'>
                            <img src={github} alt="github" className='w-7 md:w-8'/>
                        </a>
                        <a href="https://www.linkedin.com/in/matheuscrvlh/" target='_blank' rel="noopener noreferrer" className='hover:scale-110 transition'>
                            <img src={linkedin} alt="linkedin" className='w-7 md:w-8'/>
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Foto */}
            <motion.div
                className='relative z-10 w-[85dvw] lg:w-auto'
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
                <img
                    src={principal}
                    alt="Imagem Principal"
                    className='
                        rounded-4xl mx-auto
                        lg:max-w-[25vw]
                    '
                />
            </motion.div>
        </section>
    )
}
