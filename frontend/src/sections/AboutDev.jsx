export default function AboutDev() {
    return (
        <section 
            id='aboutdev'
            className='flex flex-col items-center bg-(--color-blue-dark) h-full text-white pt-5 pb-20'
        >
            <h2 className='text-5xl font-bold mt-10'>
                <span className='text-(--color-blue-light)'>
                    Sobre
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
                    Mim
                </span>
            </h2>
            <div className='flex-col justify-items-center mb-16 mt-6'>
                <h3 className='text-xl font-normal text-white/80'>Desenvolvimento com foco em performance, experiência do usuário e código escalável.</h3>
                <h3 className='text-xl font-normal text-white/80'>Cada projeto é pensado para transformar ideias em produtos digitais eficientes.</h3>
                <h3 className='text-xl font-normal text-white/80'>refletem a identidade e o propósito de cada cliente.</h3>
            </div>
        </section>
    )
}