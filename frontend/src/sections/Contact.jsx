export default function Contact() {
    return (
        <section 
            id="contact"
            className='flex flex-col h-full items-center bg-linear-to-b from-(--color-blue-base) to-(--color-blue-dark) h-dvh text-white pt-15 pb-15'
        >
            <h2 className='text-5xl font-bold'>
                <span className='text-(--color-blue-light)'>
                    Entre em 
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
                    Contato
                </span>
            </h2>
            <div className='flex-col justify-items-center mb-12 mt-5'>
                <h3 className='text-xl font-normal text-white/80'>Desenvolvimento com foco em performance, experiência do usuário e código escalável.</h3>
                <h3 className='text-xl font-normal text-white/80'>Cada projeto é pensado para transformar ideias em produtos digitais eficientes.</h3>
            </div>

        </section>
    )
}