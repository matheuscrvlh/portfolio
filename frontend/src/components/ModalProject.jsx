import { useState, useEffect } from 'react'
import { Github, ExternalLink, CheckCircle2, Zap, X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function ModalProject({
    onClose,
    type,
    status,
    year,
    img,
    images,
    title,
    descCompleta,
    features,
    challenges,
    linkProject,
    linkGithub,
    techs
}) {
    const allImages = images && images.length > 0 ? images : [img]
    const hasMultiple = allImages.length > 1
    const [current, setCurrent] = useState(0)

    function prev(e) {
        e?.stopPropagation()
        setCurrent(i => (i - 1 + allImages.length) % allImages.length)
    }

    function next(e) {
        e?.stopPropagation()
        setCurrent(i => (i + 1) % allImages.length)
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        const handleKey = e => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowLeft' && hasMultiple) prev()
            if (e.key === 'ArrowRight' && hasMultiple) next()
        }
        window.addEventListener('keydown', handleKey)
        return () => {
            document.body.style.overflow = 'auto'
            window.removeEventListener('keydown', handleKey)
        }
    }, [onClose, hasMultiple])

    const isLive = status === 'Em produção'

    return (
        <div
            onClick={onClose}
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm'
        >
            <div
                onClick={e => e.stopPropagation()}
                className='
                    relative flex flex-col
                    w-[92dvw] max-h-[92dvh]
                    bg-blue-dark rounded-2xl border border-blue-light2/20
                    overflow-hidden
                    md:w-[48dvw] md:max-h-[94dvh]
                '
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className='
                        absolute top-3 right-3 z-20
                        w-8 h-8 flex items-center justify-center rounded-full
                        bg-blue-base/85 backdrop-blur-sm border border-white/10
                        hover:bg-blue-light2 hover:border-blue-light2
                        transition-colors duration-200 cursor-pointer
                    '
                >
                    <X size={14}/>
                </button>

                {/* IMAGE CAROUSEL */}
                <div className='relative shrink-0 aspect-video bg-blue-base overflow-hidden rounded-t-2xl group'>
                    <img
                        src={allImages[current]}
                        alt={`${title} - imagem ${current + 1}`}
                        className='w-full h-full object-cover object-top transition-all duration-400'
                    />
                    <div className='absolute inset-0 bg-linear-to-t from-blue-dark/80 via-transparent to-transparent'/>

                    {/* Arrows */}
                    {hasMultiple && (
                        <>
                            <button
                                onClick={prev}
                                className='absolute left-3 top-1/2 -translate-y-1/2 z-10
                                    w-9 h-9 flex items-center justify-center rounded-full
                                    bg-black/60 backdrop-blur-sm text-white
                                    hover:bg-blue-light2/80 transition-all duration-200
                                    opacity-0 group-hover:opacity-100 cursor-pointer'
                            >
                                <ChevronLeft size={16}/>
                            </button>
                            <button
                                onClick={next}
                                className='absolute right-3 top-1/2 -translate-y-1/2 z-10
                                    w-9 h-9 flex items-center justify-center rounded-full
                                    bg-black/60 backdrop-blur-sm text-white
                                    hover:bg-blue-light2/80 transition-all duration-200
                                    opacity-0 group-hover:opacity-100 cursor-pointer'
                            >
                                <ChevronRight size={16}/>
                            </button>

                            {/* Dots */}
                            <div className='absolute bottom-3.5 left-0 right-0 flex justify-center gap-1.5 z-10'>
                                {allImages.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={e => { e.stopPropagation(); setCurrent(i) }}
                                        className={`rounded-full transition-all duration-250 cursor-pointer
                                            ${i === current ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}

                    {/* Status + type badges */}
                    <div className='absolute bottom-3 left-4 flex items-center gap-2 z-10'>
                        {isLive && (
                            <span className='flex items-center gap-1.5 bg-black/65 backdrop-blur-sm px-2.5 py-1 rounded-full'>
                                <span className='w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse'/>
                                <span className='text-green-400 text-xs font-semibold'>Em produção</span>
                            </span>
                        )}
                        <span className='bg-blue-light2 px-3 py-1 rounded-full text-white text-xs font-bold'>
                            {type}
                        </span>
                    </div>
                </div>

                {/* Scrollable content */}
                <div className='overflow-y-auto custom-scrollbar flex-1'>
                    <div className='p-6 flex flex-col gap-5'>

                        {/* Title + year */}
                        <div>
                            <h2 className='text-2xl font-bold leading-tight md:text-3xl'>{title}</h2>
                            <p className='text-white/35 text-xs mt-1'>Finalizado em {year}</p>
                        </div>

                        {/* Description */}
                        <p className='text-white/70 text-sm leading-relaxed md:text-base'>{descCompleta}</p>

                        {/* Stack */}
                        <div>
                            <p className='text-xs font-bold text-blue-light/55 tracking-widest mb-2.5'>STACK TÉCNICA</p>
                            <div className='flex flex-wrap gap-2'>
                                {techs.map((t, i) => (
                                    <span
                                        key={i}
                                        className='text-xs px-3 py-1.5 rounded-full font-semibold
                                            bg-blue-light2/12 border border-blue-light2/25
                                            text-blue-light/85'
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div>
                            <p className='text-xs font-bold text-blue-light/55 tracking-widest mb-2.5'>FUNCIONALIDADES</p>
                            <div className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
                                {features.map((f, i) => (
                                    <div key={i} className='flex items-start gap-2'>
                                        <CheckCircle2 size={14} className='text-blue-light2 mt-0.5 shrink-0'/>
                                        <span className='text-white/70 text-sm'>{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Challenges */}
                        {challenges && challenges.length > 0 && (
                            <div className='p-4 rounded-xl bg-blue-light2/6 border border-blue-light2/15'>
                                <p className='text-xs font-bold text-blue-light/55 tracking-widest mb-2.5'>DESAFIOS SUPERADOS</p>
                                <div className='flex flex-col gap-2'>
                                    {challenges.map((c, i) => (
                                        <div key={i} className='flex items-start gap-2'>
                                            <Zap size={13} className='text-blue-light2/55 mt-0.5 shrink-0'/>
                                            <span className='text-white/55 text-sm'>{c}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* CTAs */}
                        <div className='flex gap-3 pt-2 border-t border-blue-light2/15'>
                            <a
                                href={linkProject}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='
                                    flex-1 flex items-center justify-center gap-2
                                    bg-blue-light2 py-3 rounded-xl font-semibold text-sm
                                    hover:bg-blue-light2/80 transition-colors duration-200
                                '
                            >
                                <ExternalLink size={15}/>
                                Ver em Produção
                            </a>
                            {linkGithub && (
                                <a
                                    href={linkGithub}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='
                                        flex items-center justify-center gap-2
                                        px-5 py-3 rounded-xl font-semibold text-sm
                                        border border-blue-light2/25 text-white/65
                                        hover:border-blue-light2/55 hover:text-white hover:bg-blue-light2/8
                                        transition-all duration-200
                                    '
                                >
                                    <Github size={15}/>
                                    GitHub
                                </a>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
