// IMAGES
import principal from "../assets/images/principal.png"

export default function Main() {
    return (
        <section className='flex justify-between items-center text-white p-[15%] h-dvh'>
            <div className='flex flex-col gap-2 '>
                <h2 className='text-4xl font-semibold'>Olá, sou Matheus</h2>
                <h1 className='text-(--color-blue-light) text-5xl font-bold'>Desenvolvedor Full-Stack</h1>
                <div>
                    <h3 className='text-xl'>Acredito que tecnologia bem aplicada transforma ideias em realidade.</h3>
                    <h3 className='text-xl'>Construo soluções que resolvem problemas e geram valor.</h3>
                </div>
                <div className='flex'>
                    <p className='
                        border border-(--color-blue-light2)
                        text-(--color-blue-light2)
                        p-2 w-45 text-center
                        rounded-full cursor-pointer mt-4
                        bg-[linear-gradient(to_right,var(--color-blue-light2)_50%,transparent_50%)]
                        bg-size-[200%]
                        bg-right
                        hover:bg-left
                        hover:text-white
                        transition-all duration-400
                    '>
                        Serviços
                    </p>
                    <div>
                        <p>INSTA</p>
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