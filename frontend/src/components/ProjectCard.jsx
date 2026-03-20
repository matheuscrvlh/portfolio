// DEPENDENCES
import { Maximize2 } from 'lucide-react'

export default function ProjectCard({img, type, status, title, desc, linkProject, onClick}) {
    return (
        <div className='
            flex flex-col rounded-xl cursor-pointer
            bg-linear-to-t from-(--color-blue-base) to-(--color-blue-dark)
            
        '>
            <div className='aspect-video overflow-hidden bg-black h-full max-h-50 w-full max-w-90 rounded-t-xl'>
                <img src={img} alt="Imagem Projeto" className='w-full max-w-90 h-full max-h-50 rounded-t-xl object-cover hover:scale-110 transition duration-300'/>
            </div>
            <div className='flex flex-col h-full gap-5 p-5'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-2'>
                            <p className='border border-(--color-blue-light)/20 text-(--color-blue-light)/90 px-3 py-2 rounded-xl font-bold text-sm text-center'>{type}</p>
                            <p className='border border-(--color-blue-light)/20 text-(--color-blue-light)/90 px-3 py-2 rounded-xl font-bold text-sm text-center'>{status}</p>
                        </div>
                        <p className='font-semibold text-2xl'>{title}</p>
                    </div>
                    <p className='text-white/80 w-80 wrap-break-word'>{desc}</p>
                </div>
                <div className='flex gap-3 items-center w-full mt-auto'>
                    <button 
                        onClick={() => window.open(`${linkProject}`, '_blank')}
                        className='
                            w-[90%]
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
                    <Maximize2 
                        className='w-10 cursor-pointer hover:scale-108'
                        onClick={onClick}
                    />
                </div>
            </div>
        </div>
    )
}