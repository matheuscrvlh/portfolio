import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Instagram, Github, Linkedin } from 'lucide-react'

const navLinks = [
    { label: 'Início',   id: 'home' },
    { label: 'Sobre',    id: 'aboutdev' },
    { label: 'Serviços', id: 'services' },
    { label: 'Projetos', id: 'projects' },
]

export default function Navbar({ className }) {
    const [show, setShow] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()

    function goTo(section) {
        setShowMenu(false)
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: section } })
        } else {
            document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
        }
    }

    useEffect(() => {
        if (location.state?.scrollTo) {
            const id = location.state.scrollTo
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
            navigate(location.pathname, { replace: true, state: {} })
        }
    }, [location.state])

    useEffect(() => {
        const handleScroll = () => setShow(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`
            flex justify-between items-center
            text-white w-dvw h-15 px-8
            fixed z-50
            border-b transition-all duration-300
            lg:px-40 lg:h-20
            ${show
                ? 'bg-blue-dark/85! backdrop-blur-md border-blue-light2/20'
                : `${className} border-transparent`
            }
        `}>

            {/* LOGO */}
            <button
                onClick={() => goTo('home')}
                className='text-xl font-bold cursor-pointer hover:opacity-80 transition-opacity'
            >
                <span className='text-gradient'>MTH</span>CODE
            </button>

            {/* HAMBURGER */}
            <button
                onClick={() => setShowMenu(prev => !prev)}
                className='flex lg:hidden text-white focus:outline-none'
                aria-label={showMenu ? 'Fechar menu' : 'Abrir menu'}
            >
                {showMenu ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* MOBILE MENU */}
            <div className={`
                absolute top-full left-0 w-full
                bg-blue-dark border-t border-blue-light2/15 shadow-2xl
                flex flex-col overflow-hidden
                transition-all duration-300
                lg:hidden
                ${showMenu ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
            `}>
                {/* Links */}
                <div className='px-6 pt-4 pb-3 flex flex-col gap-1'>
                    {navLinks.map(link => (
                        <button
                            key={link.id}
                            onClick={() => goTo(link.id)}
                            className='px-4 py-3.5 rounded-xl text-left
                                text-white/70 font-semibold hover:text-white hover:bg-blue-light2/8
                                transition-all duration-200 cursor-pointer'
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* CTA */}
                <div className='px-6 pb-4'>
                    <a
                        href='https://wa.me/5522988114263'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='
                            flex items-center justify-center gap-2 w-full
                            py-3.5 rounded-xl font-semibold text-sm
                            bg-[linear-gradient(to_left,var(--color-blue-light3),var(--color-blue-light2),var(--color-blue-light3))]
                            bg-size-[200%] bg-right hover:bg-left
                            transition-all duration-400
                            shadow-[0_0_16px_rgba(130,24,216,0.4)]
                        '
                    >
                        Solicitar Orçamento
                    </a>
                </div>

                {/* Redes */}
                <div className='flex items-center gap-5 px-8 py-4 border-t border-blue-light2/8'>
                    <a href='https://www.instagram.com/mthcode/' target='_blank' rel='noopener noreferrer' className='text-white/30 hover:text-white/70 transition'>
                        <Instagram size={18}/>
                    </a>
                    <a href='https://github.com/matheuscrvlh' target='_blank' rel='noopener noreferrer' className='text-white/30 hover:text-white/70 transition'>
                        <Github size={18}/>
                    </a>
                    <a href='https://www.linkedin.com/in/matheuscrvlh/' target='_blank' rel='noopener noreferrer' className='text-white/30 hover:text-white/70 transition'>
                        <Linkedin size={18}/>
                    </a>
                    <span className='ml-auto text-white/15 text-xs'>mthcode.dev</span>
                </div>
            </div>

            {/* DESKTOP MENU */}
            <div className='hidden lg:flex gap-7 items-center'>
                {navLinks.map(link => (
                    <button
                        key={link.id}
                        onClick={() => goTo(link.id)}
                        className='text-white/70 font-semibold hover:text-white
                            transition-colors duration-200 cursor-pointer'
                    >
                        {link.label}
                    </button>
                ))}
                <div className='w-px h-5 bg-white/10'/>
                <button
                    onClick={() => goTo('contact')}
                    className='
                        bg-[linear-gradient(to_left,var(--color-blue-light3),var(--color-blue-light2),var(--color-blue-light3))]
                        bg-size-[200%] bg-right
                        hover:bg-left hover:scale-105
                        transition-all duration-400
                        px-7 py-2 rounded-full cursor-pointer font-semibold text-sm
                    '
                >
                    Contato
                </button>
            </div>
        </nav>
    )
}
