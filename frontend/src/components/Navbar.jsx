// DEPENDENCES
import { Link } from 'react-scroll';

// REACT
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [ show, setShow ] = useState(false);

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
            bg-linear-to-l from-(--color-blue-base) to-(--color-blue-dark) 
            flex justify-between items-center
            text-white w-full h-20 pl-40 pr-40
            fixed
            border-b transition-all duration-300
            ${show 
                ? "opacity-90 border-(--color-blue-light2)/20" 
                : "opacity-100 border-transparent"
            }
        `}>
            <Link to='home' smooth='easeInOutCubic' duration={700} className='text-xl font-bold hover:text-(--color-blue-light) cursor-pointer transition'>MTHCODE</Link>
            <div className='flex gap-7 items-center font-semibold'>
                <Link to='home' smooth='easeInOutCubic' duration={700} className='hover:text-(--color-blue-light) cursor-pointer transition'>Início</Link>
                <Link to='about' smooth='easeInOutCubic' duration={700} href='#about' className='hover:text-(--color-blue-light) cursor-pointer transition'>Sobre</Link>
                <Link to='' smooth='easeInOutCubic' duration={700} className='hover:text-(--color-blue-light) cursor-pointer transition'>Serviços</Link>
                <Link to='projects' smooth='easeInOutCubic' duration={700} className='hover:text-(--color-blue-light) cursor-pointer transition'>Projetos</Link>
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
                    <Link to='' smooth='easeInOutCubic' duration={700}>Contato</Link>
                </div>
            </div>
        </nav>
    )
}