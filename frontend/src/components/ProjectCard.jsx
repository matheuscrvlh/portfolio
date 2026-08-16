import { useState } from 'react'
import { Maximize2, ChevronLeft, ChevronRight } from 'lucide-react'

export default function ProjectCard({ img, images, type, status, year, title, desc, techs, linkProject, onClick }) {
    const isLive = status === 'Em produção'
    const allImages = images && images.length > 0 ? images : [img]
    const hasMultiple = allImages.length > 1
    const [current, setCurrent] = useState(0)
    const [isPortrait, setIsPortrait] = useState(false)

    function prev(e) {
        e.stopPropagation()
        setIsPortrait(false)
        setCurrent(i => (i - 1 + allImages.length) % allImages.length)
    }

    function next(e) {
        e.stopPropagation()
        setIsPortrait(false)
        setCurrent(i => (i + 1) % allImages.length)
    }

    return (
        <div className='
            group flex flex-col w-75 h-full rounded-xl
            bg-linear-to-t from-blue-base to-blue-dark
            border border-blue-light2/10
            hover:border-blue-light2/35
            hover:-translate-y-1.5
            hover:shadow-[0_8px_32px_rgba(130,24,216,0.22)]
            transition-all duration-300
            md:w-90
        '>
            {/* IMAGE */}
            <div className='relative overflow-hidden rounded-t-xl h-48 bg-blue-dark'>
                <img
                    src={allImages[current]}
                    alt={title}
                    onLoad={e => setIsPortrait(e.target.naturalHeight > e.target.naturalWidth)}
                    className={`w-full h-full transition-all duration-400 ${
                        isPortrait ? 'object-contain' : 'object-cover'
                    }`}
                />
                <div className='absolute inset-0 bg-linear-to-t from-blue-dark/65 via-transparent to-transparent'/>

                {/* Carousel arrows — aparecem no hover, somente se há mais de 1 imagem */}
                {hasMultiple && (
                    <>
                        <button
                            onClick={prev}
                            className='absolute left-2 top-1/2 -translate-y-1/2 z-10
                                w-7 h-7 flex items-center justify-center rounded-full
                                bg-black/60 backdrop-blur-sm text-white
                                hover:bg-blue-light2/80 transition-all duration-200
                                opacity-0 group-hover:opacity-100 cursor-pointer'
                        >
                            <ChevronLeft size={14}/>
                        </button>
                        <button
                            onClick={next}
                            className='absolute right-2 top-1/2 -translate-y-1/2 z-10
                                w-7 h-7 flex items-center justify-center rounded-full
                                bg-black/60 backdrop-blur-sm text-white
                                hover:bg-blue-light2/80 transition-all duration-200
                                opacity-0 group-hover:opacity-100 cursor-pointer'
                        >
                            <ChevronRight size={14}/>
                        </button>

                        {/* Dots */}
                        <div className='absolute bottom-2.5 left-0 right-0 flex justify-center gap-1.5 z-10'>
                            {allImages.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={e => { e.stopPropagation(); setIsPortrait(false); setCurrent(i) }}
                                    className={`rounded-full transition-all duration-250 cursor-pointer
                                        ${i === current ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'}`}
                                />
                            ))}
                        </div>
                    </>
                )}

                {/* Badges on image */}
                <div className='absolute top-3 left-3 right-3 flex justify-between items-start z-10'>
                    {isLive ? (
                        <span className='flex items-center gap-1.5 bg-black/65 backdrop-blur-sm px-2.5 py-1 rounded-full'>
                            <span className='w-1.5 h-1.5 rounded-full animate-pulse' style={{ backgroundColor: '#4ade80' }}/>
                            <span className='text-xs font-semibold' style={{ color: '#4ade80' }}>Em produção</span>
                        </span>
                    ) : <span/>}
                    <span className='bg-blue-light2 px-3 py-1 rounded-full text-white text-xs font-bold shadow-[0_0_10px_rgba(130,24,216,0.5)]'>
                        {type}
                    </span>
                </div>
            </div>

            {/* CONTENT */}
            <div className='flex flex-col flex-1 gap-3 p-5'>
                <div>
                    <p className='text-white/35 text-xs mb-0.5'>{year}</p>
                    <p className='font-bold text-xl leading-snug text-white'>{title}</p>
                </div>

                <p className='text-white/60 text-sm leading-relaxed line-clamp-3 flex-1'>
                    {desc}
                </p>

                {/* Tech pills */}
                <div className='flex flex-wrap gap-1.5 pt-1'>
                    {techs.slice(0, 4).map((tech, i) => (
                        <span
                            key={i}
                            className='text-xs px-2.5 py-0.5 rounded-full
                                bg-blue-light2/10 border border-blue-light2/20
                                text-blue-light/80 font-medium'
                        >
                            {tech}
                        </span>
                    ))}
                    {techs.length > 4 && (
                        <span className='text-xs px-2 py-0.5 text-white/30'>
                            +{techs.length - 4}
                        </span>
                    )}
                </div>

                {/* Actions */}
                <div className='flex gap-2.5 items-center pt-3 mt-auto border-t border-blue-light2/10'>
                    <a
                        href={linkProject}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='
                            flex-1 text-center text-sm font-semibold py-2 rounded-full
                            border border-white/20
                            bg-[linear-gradient(to_right,white_50%,transparent_50%)]
                            bg-size-[210%] bg-right
                            hover:bg-left hover:text-black
                            transition-all duration-400
                        '
                    >
                        Ver Projeto
                    </a>
                    <button
                        onClick={onClick}
                        title='Ver detalhes'
                        className='p-2 rounded-lg border border-white/10 text-white
                            hover:border-blue-light2/50 hover:text-blue-light hover:bg-blue-light2/10
                            transition-all duration-200 cursor-pointer'
                    >
                        <Maximize2 size={15}/>
                    </button>
                </div>
            </div>
        </div>
    )
}
