export default function ProjectCard({img, type, title, desc, link}) {
    return (
        <div className='
            flex flex-col rounded-xl cursor-pointer
            bg-linear-to-t from-(--color-blue-base) to-(--color-blue-dark)
            
        '>
            <div>
                <img src={img} alt="Imagem Projeto" className='w-90 rounded-t-xl'/>
            </div>
            <div className='flex flex-col h-full gap-5 p-5'>
                <div className='flex flex-col gap-5'>
                    <div>
                        <p className='border border-(--color-blue-light)/20 text-(--color-blue-light)/90 w-20 p-1 rounded-xl font-bold text-sm text-center'>{type}</p>
                        <p className='font-semibold text-2xl'>{title}</p>
                    </div>
                    <p className='text-white/80 w-80 wrap-break-word'>{desc}</p>
                </div>
                <button 
                    onClick={() => window.open(`${link}`, '_blank')}
                    className='
                        mt-auto
                        border border-white/20
                        p-2 text-center font-semibold
                        rounded-full cursor-pointer
                        bg-[linear-gradient(to_right,white_50%,transparent_50%)]
                        bg-size-[210%]
                        bg-right
                        hover:bg-left
                        hover:text-black
                        transition-all duration-400
                    '>
                    Ver Projeto
                </button>
            </div>
        </div>
    )
}