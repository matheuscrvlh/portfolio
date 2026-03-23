// DEPENDENCES
import { Link } from 'react-scroll';

// REACT
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar({ className }) {
    const [ show, setShow ] = useState(false);

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
        <nav className={`
            flex justify-between items-center
            text-white w-full h-20 pl-40 pr-40
            fixed
            z-1
            border-b transition-all duration-300
            ${className}
            ${show 
                ? "opacity-95 border-(--color-blue-light2)/20" 
                : "opacity-100 border-transparent"
            }
        `}>
            <p onClick={() => goTo('home')} className='text-xl font-bold hover:text-(--color-blue-light) cursor-pointer transition'>MTHCODE</p>
            <div className='flex gap-7 items-center font-semibold'>
                <p onClick={() => goTo('home')} className='hover:text-(--color-blue-light) cursor-pointer transition'>Início</p>
                <p onClick={() => goTo('about')} className='hover:text-(--color-blue-light) cursor-pointer transition'>Sobre</p>
                <p onClick={() => goTo('services')} className='hover:text-(--color-blue-light) cursor-pointer transition'>Serviços</p>
                <p onClick={() => goTo('projects')} className='hover:text-(--color-blue-light) cursor-pointer transition'>Projetos</p>
                <div className='
                    bg-[linear-gradient(to_left,var(--color-blue-light3),var(--color-blue-light2),var(--color-blue-light3))]
                    bg-size-[200%]
                    bg-right
                    hover:bg-left
                    hover:scale-105
                    transition-all duration-400
                    pl-8 pr-8 pt-2 pb-2
                    rounded-full cursor-pointer
                '>
                    <p onClick={() => goTo('home')}>Contato</p>
                </div>
            </div>
        </nav>
    )
}