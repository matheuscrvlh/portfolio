import { useNavigate, useLocation } from 'react-router-dom'

const navLinks = [
    { label: 'Início',   id: 'home' },
    { label: 'Sobre',    id: 'aboutdev' },
    { label: 'Serviços', id: 'services' },
    { label: 'Projetos', id: 'projects' },
    { label: 'Contato',  id: 'contact' },
]

const socials = [
    { label: 'Instagram', href: 'https://www.instagram.com/mthcode/' },
    { label: 'WhatsApp',  href: 'https://wa.me/5522988114263' },
    { label: 'GitHub',    href: 'https://github.com/matheuscrvlh' },
    { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/matheuscrvlh/' },
]

export default function Footer() {
    const navigate = useNavigate()
    const location = useLocation()

    function goTo(section) {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: section } })
        } else {
            document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <footer className='bg-blue-dark border-t border-blue-light2/10 text-white'>

            {/* Main */}
            <div className='
                flex flex-col gap-10 px-8 pt-12 pb-10
                md:flex-row md:justify-between md:px-20
                lg:px-40
            '>
                {/* Brand */}
                <div className='flex flex-col gap-3 max-w-xs'>
                    <button
                        onClick={() => goTo('home')}
                        className='text-xl font-bold w-fit cursor-pointer hover:opacity-80 transition-opacity'
                    >
                        <span className='text-gradient'>MTH</span>CODE
                    </button>
                    <p className='text-white/40 text-sm leading-relaxed'>
                        Desenvolvedor Full-Stack especializado em criar experiências digitais que geram resultados reais.
                    </p>
                </div>

                {/* Nav */}
                <div className='flex flex-col gap-2.5'>
                    <p className='text-white/25 text-xs font-bold tracking-widest mb-1'>NAVEGAÇÃO</p>
                    {navLinks.map(link => (
                        <button
                            key={link.id}
                            onClick={() => goTo(link.id)}
                            className='text-white/50 text-sm text-left hover:text-white/90
                                transition-colors duration-200 cursor-pointer w-fit'
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Redes */}
                <div className='flex flex-col gap-2.5'>
                    <p className='text-white/25 text-xs font-bold tracking-widest mb-1'>REDES</p>
                    {socials.map(s => (
                        <a
                            key={s.label}
                            href={s.href}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-white/50 text-sm hover:text-white/90
                                transition-colors duration-200 w-fit'
                        >
                            {s.label}
                        </a>
                    ))}
                </div>
            </div>

            {/* Bottom bar */}
            <div className='
                border-t border-blue-light2/8 px-8 py-4
                flex flex-col gap-1 items-center
                md:flex-row md:justify-between md:px-20
                lg:px-40
            '>
                <p className='text-white/25 text-xs'>© 2026 MTHCODE. Todos os direitos reservados.</p>
                <p className='text-white/15 text-xs'>React · TailwindCSS · Framer Motion</p>
            </div>
        </footer>
    )
}
