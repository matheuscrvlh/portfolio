// DEPENDENCES
import { useEffect } from "react";

// ICONS
import github from "../assets/icons/github.png"

export default function ModalProject({ onClose, type, img, title, descCompleta, link, techs }) {

    // bloqueia scroll
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div 
            onClick={onClose}
            className='fixed flex justify-center items-center w-screen inset-0 h-dvh bg-black/60 z-50'
        >
            <div className='relative w-[40dvw] h-auto bg-(--color-blue-dark) rounded-2xl'>
                <button 
                    onClick={onClose}
                    className='absolute top-2 right-2'
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
                        <p className='border border-(--color-blue-light)/20 text-(--color-blue-light)/90 px-4 py-2 rounded-xl font-bold text-md text-center'>{type}</p>
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
                    <p className='text-white/80 w-[90%] wrap-break-word mt-5'>{descCompleta}</p>
                    <div className='flex bg-black items-center'>
                        <button 
                            onClick={() => window.open(`${link}`, '_blank')}
                            className='
                                w-[80%] mt-8
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
                        <img 
                            src={github} 
                            alt="GitHub"
                            className='w-5 h-5 my-auto'
                        />
                    </div>
                    

                </div>
            </div>
        </div>
    )
}