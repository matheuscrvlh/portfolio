// DEPENDENCES
import { Link } from 'react-scroll';

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
                flex flex-col gap-15 bg-linear-to-l from-blue-base to-blue-dark w-full h-full
                justify-between items-center text-white px-[10vw] pt-30 pb-12
                lg:flex lg:flex-row lg:gap-0 lg:mt-0 lg:h-dvh lg:pt-0 lg:pb-0
            '>
            <div className='
                flex flex-col gap-2 mt-auto mb-auto w-[85dvw]
                2xl:w-auto 
            '>
                <h2 className='text-2xl md:text-4xl font-semibold'>Olá, sou Matheus</h2>
                <h1 className='
                    flex flex-col text-4xl sm:text-5xl md:text-6xl font-bold
                    xl:inline
                '>
                    <span className='text-blue-light'>
                        Desenvolvedor
                    </span>{'  '}
                    <span className='
                        bg-linear-to-r 
                        from-blue-light
                        via-blue-light2
                        to-blue-light
                        bg-size-[200%_200%]
                        animate-[gradient_5s_ease-in-out_infinite]
                        bg-clip-text text-transparent
                    '>
                        Full-Stack
                    </span>
                </h1>
                <div>
                    <h3 className='text-md text-white/80 md:text-xl'>Acredito que tecnologia bem aplicada transforma ideias em realidade.</h3>
                    <h3 className='text-md text-white/80 md:text-xl'>Construo soluções que resolvem problemas e geram valor.</h3>
                </div>
                <div className='flex gap-5 h-10 mt-4'>
                    <Link
                        to='aboutdev'
                        smooth='easeInOutCubic' duration={700}
                        className='
                            border border-blue-light2
                            text-blue-light2
                            p-2 w-45 h-10 text-center
                            rounded-full cursor-pointer
                            bg-[linear-gradient(to_right,var(--color-blue-light2)_50%,transparent_50%)]
                            bg-size-[200%]
                            bg-right
                            hover:bg-left
                            hover:text-white
                            transition-all duration-400
                            md:w-full
                        '>
                        Sobre Mim
                    </Link>
                    <div className='
                        flex items-center gap-5 w-full h-8 mt-auto mb-auto
                    '>
                        <a href="https://www.instagram.com/mthcode/" target='_blank' rel="noopener noreferrer" className='cursor-pointer hover:scale-110 transition'>
                            <img src={instagram} alt="instagram" className='w-15 sm:w-8 md:w-10'/>
                        </a>
                        <a href="https://wa.me/5522988114263" target='_blank' rel="noopener noreferrer" className='cursor-pointer hover:scale-110 transition'>
                            <img src={whatsapp} alt="whatsapp" className='w-15 sm:w-8 md:w-10'/>
                        </a>
                        <a href="https://github.com/matheuscrvlh" target='_blank' rel="noopener noreferrer" className='cursor-pointer hover:scale-110 transition'>
                            <img src={github} alt="github" className='w-15 sm:w-8 md:w-10'/>
                        </a>
                        <a href="https://www.linkedin.com/in/matheuscrvlh/" target='_blank' rel="noopener noreferrer" className='cursor-pointer hover:scale-110 transition'>
                            <img src={linkedin} alt="linkedin" className='w-15 sm:w-8 md:w-10'/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='
                w-[85dvw] 
                lg:w-auto
            '>
                <img 
                    src={principal} 
                    alt="Imagem Principal" 
                    className='
                        rounded-4xl shadow-2xl mx-auto
                        lg:max-w-[25vw]
                    '
                />
            </div>
        </section>
    )
}