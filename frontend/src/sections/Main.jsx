// IMAGES
import principal from "../assets/images/principal.png"

// ICONS
import instagram from "../assets/icons/instagram.png"
import whatsapp from "../assets/icons/whatsapp.png"
import github from "../assets/icons/github.png"
import linkedin from "../assets/icons/linkedin.png"

export default function Main() {
    return (
        <section
            id='home'
            className='bg-linear-to-l from-(--color-blue-base) to-(--color-blue-dark) h-dvh flex justify-between items-center text-white p-[15%]'
        >
            <div className='flex flex-col gap-2 '>
                <h2 className='text-4xl font-semibold'>Olá, sou Matheus</h2>
                <h1 className='text-6xl font-bold'>
                    <span className='text-(--color-blue-light)'>
                        Desenvolvedor
                    </span>{'  '}
                    <span className='
                        bg-linear-to-r 
                        from-(--color-blue-light) 
                        via-(--color-blue-light2) 
                        to-(--color-blue-light)
                        bg-size-[200%_200%]
                        animate-[gradient_5s_ease-in-out_infinite]
                        bg-clip-text text-transparent
                    '>
                        Full-Stack
                    </span>
                </h1>
                <div>
                    <h3 className='text-xl text-white/80'>Acredito que tecnologia bem aplicada transforma ideias em realidade.</h3>
                    <h3 className='text-xl text-white/80'>Construo soluções que resolvem problemas e geram valor.</h3>
                </div>
                <div className='flex gap-5 h-10 mt-4'>
                    <p className='
                        border border-(--color-blue-light2)
                        text-(--color-blue-light2)
                        p-2 w-45 h-10 text-center
                        rounded-full cursor-pointer
                        bg-[linear-gradient(to_right,var(--color-blue-light2)_50%,transparent_50%)]
                        bg-size-[200%]
                        bg-right
                        hover:bg-left
                        hover:text-white
                        transition-all duration-400
                    '>
                        Serviços
                    </p>
                    <div className="flex gap-5 h-8 mt-auto mb-auto">
                        <img src={instagram} alt="instagram" className='cursor-pointer hover:scale-110 transition'/>
                        <img src={whatsapp} alt="whatsapp" className='cursor-pointer hover:scale-110 transition'/>
                        <img src={github} alt="github" className='cursor-pointer hover:scale-110 transition'/>
                        <img src={linkedin} alt="linkedin" className='cursor-pointer hover:scale-110 transition'/>
                    </div>
                </div>
            </div>
            <div>
                <img 
                    src={principal} 
                    alt="Imagem Principal" 
                    className=''
                />
            </div>
        </section>
    )
}