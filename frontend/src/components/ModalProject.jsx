// DEPENDENCES
import { useEffect } from "react";

// ICONS
import { Github } from 'lucide-react'

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

    // bloqueia scroll e fecha modal no esc
    useEffect(() => {
        document.body.style.overflow = "hidden";

        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleEsc);
        };
    }, []);

    return (
        <div 
            onClick={onClose}
            className='fixed flex justify-center items-center w-screen inset-0 h-dvh bg-black/80 z-50 backdrop-blur-xs'
        >
            <div 
                onClick={(e) => e.stopPropagation()}
                className='relative w-[40dvw] h-auto bg-(--color-blue-dark) rounded-2xl
            '>
                <button 
                    onClick={onClose}
                    className='bg-(--color-blue-base) font-bold rounded-full py-2 px-4 absolute top-2 right-2 cursor-pointer hover:scale-105 transition'
                >
                    X
                </button>
                <div>
                    <img 
                        src={img} 
                        alt="Imagem Principal" 
                        className=' rounded-t-2xl'
                    />
                </div>
                <div className='p-8'>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <p className='border border-(--color-blue-light)/20 text-(--color-blue-light)/90 px-4 py-2 rounded-xl font-bold text-md text-center'>{type}</p>
                            <p className='border border-(--color-blue-light)/20 text-(--color-blue-light)/90 px-4 py-2 rounded-xl font-bold text-md text-center'>{status}</p>
                        </div>
                        <div className='flex gap-3'>
                            {techs.map((t, i) => 
                                <p 
                                    key={i}
                                    className='border border-(--color-blue-light)/20 text-(--color-blue-light)/90 px-6 py-2 rounded-xl font-bold text-md text-center'
                                >
                                    {t}
                                </p>
                            )}
                        </div>
                    </div>
                    <p className='text-2xl font-bold mt-2'>{title}</p>
                    <p className='text-white/80 w-[90%] wrap-break-word mt-3'>{descCompleta}</p>
                    <div className='flex flex-col gap-1 mt-6'>
                        <p className='font-bold text-xl'>Funcionalidades</p>
                        <div>
                            {features.map((f, i) => 
                                <p 
                                    className='text-white/80'
                                    key={i}
                                >
                                    - {f}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className='flex gap-5 h-full mt-10'>
                        <button 
                            onClick={linkProject ? () => window.open(`${linkProject}`, '_blank', 'noopener,noreferrer') : undefined}
                            aria-label="Ver projeto em produção"
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
                            Ver Projeto em Produção
                        </button>
                        <Github 
                            onClick={linkGithub ? () => window.open(`${linkGithub}`, '_blank', 'noopener,noreferrer') : undefined}
                            aria-label="Abrir repositório no GitHub"
                            className='w-10 h-10 hover:scale-108 transition cursor-pointer'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}