// REACT
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// ICONS
import { Menu } from 'lucide-react';

export default function Navbar({ className }) {
    const [ show, setShow ] = useState(false);
    const [ showMenu, setShowMenu ] = useState(false);

    const navigate = useNavigate()
    const location = useLocation() 

    function goTo(section) {
        if(location.pathname !== '/') {
            navigate('/');

            setTimeout(() => {
                document
                .getElementById(section)
                ?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            document
            .getElementById(section)
            ?.scrollIntoView({ behavior: 'smooth' })
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShow(true)
            } else {
                setShow(false)
            }
        }
        window.addEventListener('scroll', handleScroll) 

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav 
            className={`
                flex justify-between items-center
                text-white w-dvw h-15 px-10
                fixed z-1
                border-b transition-all duration-300
                lg:px-40 lg:h-20 lg:p-0
                ${className}
                ${show 
                    ? "opacity-95 border-blue-light2/20" 
                    : "opacity-100 border-transparent"
                }
            `}
        >
            {/* LOGO */}
            <p onClick={() => goTo('home')} className='text-xl font-bold hover:text-blue-light cursor-pointer transition'>MTHCODE</p>

            {/* MENU MOBILE */}
            <div className='flex lg:hidden gap-2 justify-between font-semibold'>
                <Menu onClick={() => setShowMenu(!showMenu)} />
                    {showMenu && 
                        <div className='flex flex-col absolute items-center gap-2 left-0 mx-auto min-w-dvw min-h-full mt-8 py-4 bg-blue-dark'>
                            <div className='w-[90%]'>
                                <p onClick={() => goTo('home')} className='hover:text-blue-light cursor-pointer transition'>Início</p>
                                <p onClick={() => goTo('about')} className='hover:text-blue-light cursor-pointer transition'>Sobre</p>
                                <p onClick={() => goTo('services')} className='hover:text-blue-light cursor-pointer transition'>Serviços</p>
                                <p onClick={() => goTo('projects')} className='hover:text-blue-light cursor-pointer transition'>Projetos</p>
                            </div>
                            <div className='
                                    bg-[linear-gradient(to_left,var(--color-blue-light3),var(--color-blue-light2),var(--color-blue-light3))]
                                    bg-size-[200%]
                                    bg-right mt-2 w-[90dvw]
                                    text-center mx-auto
                                    hover:bg-left
                                    hover:scale-105
                                    transition-all duration-400
                                    px-8 py-2
                                    rounded-xl cursor-pointer
                                '>
                                    <p onClick={() => goTo('contact')}>Contato</p>
                                </div>
                        </div>
                    }  
            </div>

            {/* MENU DESKTOP */}
            <div className='hidden lg:flex gap-7 items-center font-semibold'>
                <p onClick={() => goTo('home')} className='hover:text-blue-light cursor-pointer transition'>Início</p>
                <p onClick={() => goTo('about')} className='hover:text-blue-light cursor-pointer transition'>Sobre</p>
                <p onClick={() => goTo('services')} className='hover:text-blue-light cursor-pointer transition'>Serviços</p>
                <p onClick={() => goTo('projects')} className='hover:text-blue-light cursor-pointer transition'>Projetos</p>
                <div className='
                    bg-[linear-gradient(to_left,var(--color-blue-light3),var(--color-blue-light2),var(--color-blue-light3))]
                    bg-size-[200%]
                    bg-right
                    hover:bg-left
                    hover:scale-105
                    transition-all duration-400
                    px-8 py-2
                    rounded-full cursor-pointer
                '>
                    <p onClick={() => goTo('contact')}>Contato</p>
                </div>
            </div>
        </nav>
    )
}