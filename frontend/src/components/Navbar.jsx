export default function Navbar() {
    return (
        <nav className='
            bg-linear-to-l from-(--color-blue-base) to-(--color-blue-dark) 
            flex justify-between items-center bg-(--color-blue-dark)/1 
            text-white w-full h-20 pl-40 pr-40
        '>
            <p className='text-xl font-bold hover:text-(--color-blue-light) cursor-pointer transition'>MTHCODE</p>
            <div className='flex gap-7 items-center font-semibold'>
                <p className='hover:text-(--color-blue-light) cursor-pointer transition'>Início</p>
                <p className='hover:text-(--color-blue-light) cursor-pointer transition'>Sobre</p>
                <p className='hover:text-(--color-blue-light) cursor-pointer transition'>Serviços</p>
                <p className='hover:text-(--color-blue-light) cursor-pointer transition'>Projetos</p>
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
                    <p>Contato</p>
                </div>
            </div>
        </nav>
    )
}